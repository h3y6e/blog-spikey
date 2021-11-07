# Blog

heyhoe's pothooks.

## Prd（GitHub Pages）
[![Production](https://github.com/5ebec/blog/workflows/Production/badge.svg)](https://github.com/5ebec/blog/actions?query=workflow%3A%22Production%22)

URL: https://blog.5ebec.dev

## Stg（Cloudflare Pages）
[![Staging](https://github.com/5ebec/blog/workflows/Staging/badge.svg)](https://github.com/5ebec/blog/actions?query=workflow%3A%22Staging%22)

Latest staging site's URL: https://stg.pages.dev

## Dev
### Franklin.jl
```julia
julia> ]
(blog) Pkg> activate .
(blog) Pkg> instantiate
julia> using Franklin
julia> serve()
→ Initial full pass...
→ Starting the server...
✓ LiveServer listening on http://localhost:8000/ ...
  (use CTRL+C to shut down)
```

or

```shell
$ julia -e 'using Pkg; Pkg.activate("."); Pkg.instantiate();'
$ yarn install
$ yarn dev:franklin
```

### Style（PostCSS）
```shell
$ yarn install
$ yarn dev:css
```

## LICENSE
[MIT License](./LICENSE)

`Blog` is built using the SSG [`Franklin.jl`](https://github.com/tlienart/Franklin.jl) [(MIT License)](https://github.com/tlienart/Franklin.jl/blob/master/LICENSE.md).

`Blog`'s theme is derived from the [`hugo-theme-terminal`](https://github.com/panr/hugo-theme-terminal/) [(MIT License)](https://github.com/panr/hugo-theme-terminal/blob/master/LICENSE.md).