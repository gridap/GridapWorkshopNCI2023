using Literate
## include Literate scripts starting with following 2 letters in the deploy
incl = ""
## Set `sol=true` to produce output with solutions contained and hints stripts. Otherwise the other way around.
sol = false
##
src_dir = string(@__DIR__,"/workshop-materials/src/")
fig_dir = string(@__DIR__,"/workshop-materials/figures/")
out_dir = string(@__DIR__,"/_literate/")

function replace_string(str)
        strn = str
        for st in ["../figures/" => "/assets/literate_figures/"]
            strn = replace(strn, st)
        end
    return strn
end

"""
    process_hashtag(str, hashtag, fn; striptag=true)

Process all lines in str which start with a hashtag by the
function `fn` (`line->newline`).

```
# drop lines starting with "#sol"
drop_sol = str -> process_hashtag(str, "#sol", line -> "")
Literate.notebook(fl, "notebooks", preproces=drop_sol)
```
"""
function process_hashtag(str, hashtag, fn; striptag=true)
    hashtag = strip(hashtag)
    occursin("\r\n", str) && error("""DOS line endings "\r"n" not supported""")
    out = ""
    regex = Regex(hashtag)
    for line in split(str, '\n')
        # line = if startswith(lstrip(line), hashtag)
        line = if occursin(regex, line)
            fn(striptag ? replace(line, hashtag=>"") : line)
        else
            line = line * "\n"
        end
        out = out * line
    end
    return out
end

"Use as `preproces` function to remove `#sol`-lines & just remote `#tag`-tag"
function rm_sol(str)
    str = process_hashtag(str, "#sol=", line->"")
    str = process_hashtag(str, "#hint=", line->"#" * line * "\n")
    return str
end
"Use as `preproces` function to remove `#hint`-lines & just remote `#sol`-tag"
function rm_hint(str)
    str = process_hashtag(str, "#sol=", line->line * "\n")
    str = process_hashtag(str, "#hint=", line->"")
    return str
end

mkpath(out_dir)
for fl in readdir(src_dir)
    if splitext(fl)[end]!=".jl" || fl=="process_materials.jl" || !occursin(incl, fl)
        continue
    end

    str  = read(string(src_dir,fl), String)
    strn = replace_string(str)
    if sol
        strn2 = rm_hint(strn)
    else
        strn2 = rm_sol(strn)
    end
    out_fl = string(out_dir,fl)
    write(out_fl, strn2)
end

# copy literate figures
s="_assets/literate_figures"
if !(isdir(s))
  mkpath("_assets/literate_figures")
end
for subdir in readdir(fig_dir)
    sub="_assets/literate_figures/$subdir"
    if !(isdir(sub))
      mkpath("_assets/literate_figures/$subdir")
    end 
    for file in readdir(string(fig_dir,subdir))
        cp(string(fig_dir,subdir,"/",file), "_assets/literate_figures/$subdir/$file", force=true)
    end
end

# Copy software installation instructions
str = readlines("workshop-materials/README.md")

#str[1] = "# Software Installation instructions \n "
str = map(line -> line * "\n", str[1:end])
str = prod(str)
write("software_install.md",str)
