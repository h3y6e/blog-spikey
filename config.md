<!-- textlint-disable -->

<!--
global page variables
-->
@def author = "heyhoe"
@def author_url = "https://h3y6e.com"
@def generate_rss = true
@def website_title = "#a5ebec"
@def website_description = "へいほぅの殴り書き"
@def website_url = "https://blog.h3y6e.com"
@def tag_page_path = "tags"
@def date_format = "yyyy-mm-dd"
@def mintoclevel = 2
@def maxtoclevel = 3

<!--
Add here files or directories that should be ignored by Franklin, otherwise
these files might be copied and, if markdown, processed by Franklin which
you might not want. Indicate directories by ending the name with a `/`.
-->
@def ignore = [".vscode/", "theme/", ".node-version", ".imgbotconfig",
    ".prettierignore", ".prettierrc.yml", ".prh.yml", ".swcrc", ".textlintrc.yml",
    ".tool-versions", "bun.lockb", "Manifest.toml", "ogimage.mjs", "package.json",
    "postcss.config.js", "Project.toml", "yarn.lock", "tombi.toml", "mise.toml"]

<!--
Add here global latex commands to use throughout your
pages. It can be math commands but does not need to be.
For instance:
* \newcommand{\phrase}{This is a long phrase to copy.}
-->
\newcommand{\R}{\mathbb R}
\newcommand{\unchecked}[1]{~~~<input type="checkbox" />~~~!#1}
\newcommand{\checked}[1]{~~~<input type="checkbox" checked />~~~!#1}
\newcommand{\scal}[1]{\langle !#1 \rangle}
\newcommand{\strike}[1]{~~~<s>!#1</s>~~~}
\newcommand{\figure}[2]{~~~<figure><img src="!#1"/><figcaption>!#2</figcaption></figure>~~~}

<!-- textlint-enable -->
