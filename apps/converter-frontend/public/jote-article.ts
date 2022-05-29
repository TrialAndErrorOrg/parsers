export const cls = `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% jote-article.cls, v1.5, 2018/07/05
% Developed by Overleaf.
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
\\NeedsTeXFormat{LaTeX2e}
\\ProvidesClass{jote-article}[2018/07/05, v1.5]

%% Definitions for adding journal elements
\\def\\@jlogo{}
\\def\\@jname{}
\\def\\@jyear{}
\\def\\@jpages{}
\\def\\@jvolume{}
\\def\\@jissue{}
\\def\\@jwebsite{}

\\def\\@pubpub{}
\\def\\@companionurl{}
\\def\\@companiontitle{}
\\def\\@companionabstract{}
\\def\\@companionkey{}
\\def\\@abstracttext{}

\\def\\@runningauthor{}
\\def\\@corraddress{}
\\def\\@corremail{}
\\def\\@fundinginfo{}
\\def\\@presentaddress{}

\\def\\@rgainfo{}

\\def\\@papertype{}
\\def\\@paperfield{}
\\def\\@paperdoi{}
\\def\\@paperreceived{}
\\def\\@paperrevised{}
\\def\\@paperaccepted{}
\\def\\@paperpublished{}
\\def\\@paperpublisheddate{}
\\def\\@papereditor{}

\\def\\@rolling{}
\\def\\@subtitle{}

\\def\\@heightabstract{}
\\def\\@widthaffil{}

\\def\\@noabstract{}

\\def\\@funding{}
\\def\\@acknowledgments{}
\\def\\@contributions{}
\\def\\@interests{}
\\def\\@keywordsabstract{}

\\def\\@authorone{}
\\def\\@authortwo{}
\\def\\@authorthree{}
\\def\\@authorfour{}
\\def\\@authorfive{}
\\def\\@orcidicon{}

%for peer review
\\def\\@ogauthor{}
\\def\\@prround{}

\\newif\\if@numeric
\\newif\\if@authordate
\\newif\\if@amsrefs
\\newif\\if@blindreview
\\newif\\if@useserif
\\newif\\if@jote@lineno

\\newif\\if@seplic

\\newif\\if@reflection
\\newif\\if@rga
\\newif\\if@empirical
\\newif\\if@meta
\\newif\\if@editorial
\\newif\\if@review

\\newif\\if@issue
\\newif\\if@rolling
%% Add options for other journals here
\\DeclareOption{jote}{%
  \\def\\@jlogo{jabr-logo}%
  \\def\\@jname{J Appl Behav Res}%
  \\def\\@jwebsite{joteonlinelibrary.com/journal/jabr}%
}

%% Options for bibliography style
\\DeclareOption{numeric}{
  \\@numerictrue
  \\@authordatefalse
  \\@amsrefsfalse
}
\\DeclareOption{authordate}{
  \\@numericfalse
  \\@authordatetrue
  \\@amsrefsfalse
}
\\DeclareOption{ams-refs}{
  \\@numericfalse
  \\@authordatefalse
  \\@amsrefstrue
}

\\DeclareOption{seplic}{
    \\@seplictrue
}

%% Options for papertype

\\DeclareOption{reflection}{\\@reflectiontrue \\@reviewfalse}
\\DeclareOption{rga}{\\@rgatrue \\@reviewfalse}
\\DeclareOption{empirical}{\\@empiricaltrue \\@reviewfalse}
\\DeclareOption{meta}{\\@metatrue \\@reviewfalse}
\\DeclareOption{editorial}{\\@editorialtrue \\@reviewfalse}
\\DeclareOption{review}{\\@reviewtrue}

\\DeclareOption{issue}{\\@issuetrue \\@rollingfalse}
%% Option for blind review
\\DeclareOption{blind}{\\@blindreviewtrue}

%% v1.3: Option for serif fonts
\\DeclareOption{serif}{\\@useseriftrue}

%% v1.4: Option for line numbers
\\DeclareOption{lineno}{\\@jote@linenotrue}

%%
\\DeclareOption{twocolumn}{\\PassOptionsToClass{\\CurrentOption}{article}}

%% v1.2: don't set any defaults
% \\ExecuteOptions{num-refs}
\\ProcessOptions\\relax


\\LoadClass[twoside]{article}

\\RequirePackage{booktabs} %Makes tables "prettier"
\\RequirePackage[table]{xcolor}
\\RequirePackage{ifpdf}
\\RequirePackage{ifxetex}
\\RequirePackage{ifluatex}
\\RequirePackage{mathtools}
\\RequirePackage{bm}
\\RequirePackage{graphicx}
\\RequirePackage{tabularx}
\\RequirePackage{tabulary}
\\RequirePackage{textcase}
\\RequirePackage{dashrule}
\\RequirePackage{ragged2e}
\\RequirePackage{authblk}
\\RequirePackage[hyphens]{url}
\\RequirePackage{soul}
\\RequirePackage{xpatch}
\\RequirePackage{afterpage}
\\RequirePackage{setspace}
\\RequirePackage{hyperref} %For bookmarks and links
\\RequirePackage{paracol} % necessary to make reviewbox pagebreak work
%\\RequirePackage{cooltooltips} % For hover and comments
%\\RequirePackage[inactive]{fancytooltips} %  allows inclusion of tooltips which contain arbitrary TEX material
\\RequirePackage{pdfcomment} % little bit less complex hover
\\RequirePackage{tikz,lipsum,lmodern}
\\RequirePackage[breakable,skins,most]{tcolorbox}
\\tcbuselibrary{skins,xparse,breakable}
%\\RequirePackage[backend = biber, style=apa]{biblatex}
\\definecolor{jotelighter}{HTML}{ace5f9}
\\definecolor{jotebase}{HTML}{60bfe1}
\\colorlet{jote}{cyan!20}
\\definecolor{jotedark}{HTML}{12799d}
\\definecolor{jotelight}{HTML}{d6f6ff}
\\colorlet{tip}{jotedark}
\\if@twocolumn
  \\RequirePackage[switch, right]{lineno}
\\else
  \\RequirePackage[right]{lineno}
\\fi

\\newif\\ifxetexorluatex
\\ifxetex
  \\xetexorluatextrue
\\else
  \\ifluatex
    \\xetexorluatextrue
  \\else
    \\xetexorluatexfalse
  \\fi
\\fi


\\RequirePackage{microtype}
\\RequirePackage{siunitx}
\\ifxetexorluatex
  \\RequirePackage[framemethod=tikz]{mdframed}
\\else
  \\ifpdf
    \\RequirePackage[framemethod=tikz]{mdframed}
  \\else
    \\RequirePackage[framemethod=default]{mdframed}
    \\RequirePackage{tikz}
  \\fi
\\fi

\\RequirePackage{silence}
\\WarningFilter{microtype}{tracking amount list}
\\WarningFilter{latex}{Reference \`mdf@pagelabel}

\\ifxetexorluatex
  \\RequirePackage{microtype}
  \\RequirePackage[partial=upright]{unicode-math}
  \\let\\boldsymbol\\symbf
 % \\if@useserif
    %\\setmainfont[Ligatures=TeX]{TeX Gyre Termes}
    %\\setmathfont[Extension=.otf,BoldFont=*bold]{xits-math}
 % \\else
%     \\RequirePackage[partial=upright]{unicode-math}
    %\\setmainfont[Ligatures=TeX]{Lato}
    %\\setmathfont{TeX Gyre DejaVu Math}
    %\\setmathfont[range={\\int}]{Latin Modern Math}
    %\\setmathfont[range=\\mathup/{num,latin,Latin,greek,Greek}, Ligatures=TeX]{Lato}
    %\\setmathfont[range=\\mathit/{num,latin,Latin,greek,Greek}, Ligatures=TeX]{Lato Italic}
    %\\setmathfont[range=\\mathbfup/{num,latin,Latin,greek,Greek}, Ligatures=TeX]{Lato Bold}
  %\\fi
  \\setsansfont[Ligatures=TeX]{Lato}
\\else
  \\RequirePackage{microtype}
  \\RequirePackage[T1]{fontenc}
  \\RequirePackage[utf8]{inputenc}
  \\if@useserif
    \\RequirePackage{tgtermes}
    \\RequirePackage[semibold]{sourcesanspro}
    \\RequirePackage{stix}
  \\else
    \\RequirePackage[default]{sourcesanspro}
    \\IfFileExists{newtxsf.sty}{
      \\RequirePackage[cmintegrals,nosymbolsc]{newtxsf}
    }{}
  \\fi
  \\ifpdf
  \\SetTracking[spacing={500*,166,}]{encoding={*}}{80}
  \\fi
\\fi


\\RequirePackage
 [paperwidth=210mm,paperheight=280mm,
  left=14.3mm, textwidth=180mm,
  lines=55, headsep=2.5\\baselineskip,headheight=20\\p@,
  footskip=23\\p@,columnsep=2em, includeheadfoot]
{geometry}

\\RequirePackage{alphalph}
\\newalphalph{\\fnsymbolmult}[mult]{\\@fnsymbol}{5}

\\newcounter{authorfn}
\\setcounter{authorfn}{1}
\\newcommand{\\authfn}[1]{%
  \\fnsymbolmult{#1}%
}

\\newcommand{\\presentadd}[2][]{
  \\ifx\\empty\\@presentaddress\\else\\appto{\\@presentaddress}{\\\\}{}{}\\fi
  \\appto{\\@presentaddress}{%
  \\ifx\\empty#1\\else\\textsuperscript{#1}\\fi
  #2%
  }{}{}
}


%% These will be set by the \\journal{} command
\\newcommand{\\jlogo}[1]{\\def\\@jlogo{#1}}
\\newcommand{\\jname}[1]{\\def\\@jname{#1}}
\\newcommand{\\jyear}[1]{\\def\\@jyear{#1}}
\\newcommand{\\jvolume}[1]{\\def\\@jvolume{#1}}
\\newcommand{\\jissue}[1]{\\def\\@jissue{#1}}
\\newcommand{\\jpages}[1]{\\def\\@jpages{#1}}
\\newcommand{\\jwebsite}[1]{\\def\\@jwebsite{#1}}

%JOTE specific commands: pubpub link, link to article on PubPub, Title of the companion piece and Abstract of the companion Piece
\\newcommand{\\pubpub}[1]{\\def\\@pubpub{#1}}
\\newcommand{\\companionurl}[1]{\\def\\@companionurl{#1}}
\\newcommand{\\companiontitle}[1]{\\def\\@companiontitle{#1}}
\\newcommand{\\companionabstract}[1]{\\def\\@companionabstract{#1}}
\\newcommand{\\companionkey}[1]{\\def\\@companionkey{#1}}
\\newcommand{\\abstracttext}[1]{\\def\\@abstracttext{#1}}

\\newcommand{\\heightabstract}[1]{\\def\\@heightabstract{#1}}
\\newcommand{\\widthaffil}[1]{\\def\\@widthaffil{#1}}

%Command that appends rolling to the Title if non-empty.
\\newcommand{\\rolling}[1]{\\def\\@rolling{#1}}
%Command for the subtitle, if any
\\newcommand{\\subtitle}[1]{\\def\\@subtitle{#1}}


\\newcommand{\\runningauthor}[1]{\\def\\@runningauthor{#1}}
\\newcommand{\\corraddress}[1]{\\def\\@corraddress{#1}}
\\newcommand{\\corremail}[1]{\\def\\@corremail{#1}}

\\newcommand{\\rgainfo}[1]{\\def\\@rgainfo{#1}}

\\newcommand{\\fundinginfo}[1]{\\def\\@fundinginfo{#1}}

\\newcommand{\\paperdoi}[1]{\\def\\@paperdoi{#1}}
\\newcommand{\\paperreceived}[1]{\\def\\@paperreceived{#1}}
\\newcommand{\\paperrevised}[1]{\\def\\@paperrevised{#1}}
\\newcommand{\\paperaccepted}[1]{\\def\\@paperaccepted{#1}}

\\newcommand{\\paperpublished}[1]{\\def\\@paperpublished{#1}}
\\newcommand{\\paperpublisheddate}[1]{\\def\\@paperpublisheddate{#1}}
\\newcommand{\\papereditor}[1]{\\def\\@papereditor{#1}}
\\newcommand{\\papertype}[1]{\\def\\@papertype{#1}}
\\newcommand{\\paperfield}[1]{\\def\\@paperfield{#1}}

\\newcommand{\\funding}[1]{\\def\\@funding{#1}}
\\newcommand{\\acknowledgments}[1]{\\def\\@acknowledgments{#1}}
\\newcommand{\\contributions}[1]{\\def\\@contributions{#1}}
\\newcommand{\\interests}[1]{\\def\\@interests{#1}}

\\newcommand{\\keywordsabstract}[1]{\\def\\@keywordsabstract{#1}}
\\newcommand{\\noabstract}[1]{\\def\\@noabstract{#1}}
%Author metadata
\\newcommand{\\authorone}[1]{\\def\\@authorone{#1}}
\\newcommand{\\authortwo}[1]{\\def\\@authortwo{#1}}
\\newcommand{\\authorthree}[1]{\\def\\@authorthree{#1}}
\\newcommand{\\authorfour}[1]{\\def\\@authorfour{#1}}
\\newcommand{\\authorfive}[1]{\\def\\@authorfive{#1}}
%for peer review
\\newcommand{\\ogauthor}[1]{\\def\\@ogauthor{#1}}
\\newcommand{\\prround}[1]{\\def\\@prround{#1}}

%lin in front of subsection
\\newcommand\\jotebar{\\kern1pt\\rule[-0.31\\dp\\strutbox]{1.2pt}{0.7\\baselineskip}\\kern1pt}

\\RequirePackage{scalerel}
\\RequirePackage{tikz}
\\usetikzlibrary{svg.path}


\\definecolor{orcidlogocol}{HTML}{A6CE39}
\\tikzset{
  orcidlogo/.pic={
    \\fill[orcidlogocol] svg{M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z};
    \\fill[white] svg{M86.3,186.2H70.9V79.1h15.4v48.4V186.2z}
                 svg{M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5c34.9,0,42.9-26.5,42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z}
                 svg{M88.7,56.8c0,5.5-4.5,10.1-10.1,10.1c-5.6,0-10.1-4.6-10.1-10.1c0-5.6,4.5-10.1,10.1-10.1C84.2,46.7,88.7,51.3,88.7,56.8z};
  }
}

\\newcommand\\orcidicon[1]{\\href{https://orcid.org/\\def\\@orcidicon#1}{\\mbox{\\scalerel*{
\\begin{tikzpicture}[yscale=-1,transform shape]
\\pic{orcidlogo};
\\end{tikzpicture}
}{|}}}}
% Review boxes
%% Box for review end of doc
\\newtcolorbox[auto counter]{reviewend}[1]{%
  breakable,
  width=\\textwidth,
  colback=gray!5!white,
  fonttitle=\\bfseries,
  title=Reviewer~\\thetcbcounter \\space #1,
  colframe=gray!25!white,
  coltitle=gray!50!black,
  subtitle style={bottomrule=.5pt,
    toprule=0pt,
    colframe=gray,
    colback=gray!10!white,
    coltext=gray!70!black}
}


%% Box for review at section
\\newtcolorbox[auto counter]{reviewat}{%
  enhanced jigsaw,
  breakable,
  pad at break*=1mm,
  width=\\linewidth,
  colback=gray!5!white,
  fonttitle=\\bfseries,
  title=Peer review,
  colframe=gray!25!white,
  coltitle=gray!50!black,
  subtitle style={bottomrule=.5pt,
    toprule=0pt,
    colback=gray!10!white,
    coltext=gray!70!black}
}

% Peer review hover command
\\newcommand{\\gotoreview}{\\vspace{-14pt\\hfill%
\\pdftooltip{\\textcolor{white}{peer reviews}}{click on the arrow to view the peer review comments on this section}%
\\hyperref[sec:reviews]{$\\bigblacktriangledown$}%
}}

% RGA checkbox command
\\def\\checkmark{\\tikz\\fill[scale=0.2](.4,.25) -- (.65,0) -- (1,.8) -- (.65,.15) -- cycle;}
\\newcommand{\\checkedbox}{\\rlap{\\hspace{.08pt} \\checkmark}{$\\square$}}

%Set the metadata correctly
\\RequirePackage{hyperref}

\\AtEndPreamble{
\\makeatletter
\\hypersetup{
		pdftitle={\\@runningauthor\\text{ } (\\@jyear) - \\@title},
    	pdfauthor = {\\@authorone%
    	\\ifdefempty{\\@authortwo}{}{, \\@authortwo}%
    	\\ifdefempty{\\@authorthree}{}{, \\@authorthree}%
    	\\ifdefempty{\\@authorfour}{}{, \\@authorfour}%
    	\\ifdefempty{\\@authorfive}{}{, \\@authorfive}},
    	pdfsubject = {\\@title},
    	pdfkeywords = {\\@keywordsabstract},
        colorlinks=true,
        linkcolor=jotedark,
        filecolor=jotedark,
        urlcolor=jotedark,
        citecolor=jotedark}
\\makeatother
}

% normal font is 8pt/13pt
\\RequirePackage{scrextend}
\\changefontsizes[13\\p@]{8\\p@}

% sectional headings
\\ifxetexorluatex
  \\newcommand{\\allcaps}[2][10.0]{\\addfontfeature{LetterSpace=#1}\\MakeTextUppercase{#2}}
  %% Fake small caps
  \\renewcommand{\\textsc}[1]{{\\addfontfeature{LetterSpace=10.0,Scale=0.8}\\MakeTextUppercase{#1}}}
\\else
  \\ifpdf
    \\newcommand{\\allcaps}[2][]{\\textls*[#1]{\\MakeTextUppercase{#2}}}
  \\else
    \\newcommand{\\allcaps}[2][]{\\MakeTextUppercase{#2}}
  \\fi
\\fi

\\RequirePackage[explicit]{titlesec}

\\titleformat{\\section}
  {\\fontsize{12pt}{15\\p@}\\sfseries\\bfseries}
  {\\thesection}{1em}{\\textmd{|}\\quad\\allcaps{#1}}

\\newcommand{\\backmatter}{%
  \\titleformat{\\section}
    {\\fontsize{10pt}{13\\p@}\\bfseries}
    {}{0pt}{\\allcaps{##1}}%
  \\titlespacing*{\\section}{0pt}{\\baselineskip}{0pt}
}

\\ifxetexorluatex
  \\titleformat{name=\\section,numberless}[block]
    {\\fontsize{10pt}{13\\p@}\\bfseries\\raggedright}
    {}{0pt}{\\textsc{#1}}
\\else
  \\ifpdf
  \\titleformat{name=\\section,numberless}[block]
{\\fontsize{11pt}{13\\p@}\\sffamily\\bfseries\\raggedright}
    {}{0pt}{%
    \\if@empirical\\color{jotedark}\\fi%
    \\if@rga\\color{jotedark}\\fi%
    {\\textls[20]{#1}}%
    }
  \\else
  \\titleformat{name=\\section,numberless}[block]
    {\\fontsize{11pt}{13\\p@}\\fontfamily{lato-TLF}\\fontseries{eb}\\sffamily\\mdseries\\raggedright}
    {}{0pt}{#1}
  \\fi
\\fi
\\titlespacing*{\\section}{0pt}{\\baselineskip}{0pt}
\\titlespacing*{name=\\section,numberless}{0pt}{\\baselineskip}{0pt}

\\titleformat{\\subsection}[block]
  {\\fontsize{10pt}{14pt}\\sffamily\\mdseries\\raggedright}
  {\\thesubsection}{1em}{{\\color{jotedark}\\textbf{\\jotebar}}\\ \\ #1}

\\titlespacing*{\\subsection}{0pt}{\\baselineskip}{0pt}
\\titlespacing*{name = \\subsection,numberless}{0pt}{\\baselineskip}{0pt}

\\titleformat{\\subsubsection}[block]
  {\\fontsize{9pt}{11\\p@}\\sffamily\\bfseries\\raggedright}
  {\\thesubsubsection}{1em}{\\textit{#1}}%Textls sets spacing. 100 is a bit, can take big numbers
\\titlespacing*{\\subsubsection}{0pt}{\\baselineskip}{0pt}

\\if@useserif
  \\titleformat{\\paragraph}[hang]
    {\\fontsize{7\\p@}{10\\p@}\\sffamily\\bfseries\\color{black!75}}
    {\\theparagraph}{0pt}{#1}
  \\titleformat{name=\\paragraph,numberless}[runin]
    {\\normalsize\\sffamily\\bfseries}
    {}{0pt}{#1\\text{ }}
  \\titleformat{\\subparagraph}[runin]
    {\\normalsize\\sffamily\\mdseries}
    {\\thesubparagraph}{0pt}{\\textit{#1} }
\\else
  \\ifxetexorluatex
    \\titleformat{\\paragraph}[hang]
      {\\fontsize{8\\p@}{13\\p@}\\fontspec{Lato Black}\\color{black!75}}
      {\\theparagraph}{0pt}{#1}
    \\titleformat{name=\\paragraph,numberless}[hang]
      {\\fontsize{8\\p@}{13\\p@}\\fontspec{Lato Black}}
      {}{0pt}{#1}
    \\titleformat{\\subparagraph}[runin]
      {\\normalsize\\sffamily\\color{black!75}}
      {\\thesubparagraph}{0pt}{#1}

  \\else
    \\titleformat{\\paragraph}[hang]
      {\\fontsize{8\\p@}{13\\p@}\\sffamily\\bfseries\\color{black!75}}
      {\\theparagraph}{0pt}{#1}
    \\titleformat{name=\\paragraph,numberless}[hang]
      {\\fontsize{8\\p@}{13\\p@}\\sffamily\\bfseries}
      {}{0pt}{#1}
    \\titleformat{\\subparagraph}[runin]
      {\\normalsize\\sffamily\\bfseries\\color{black!75}}
      {\\thesubparagraph}{0pt}{#1}
  \\fi
\\fi

\\titlespacing*{\\paragraph}{\\parindent}{0\\baselineskip}{0pt}
\\titlespacing*{\\subparagraph}{\\parindent}{0\\baselineskip}{0pt}




% Formatting of footer for first page
%% v1.4: can't use "real" footnotes anymore for twocolumn
\\RequirePackage[flushmargin,bottom,norule, marginal]{footmisc}
%   \\def\\blfootnote{\\gdef\\@thefnmark{}\\@footnotetext}
%   \\appto{\\footnotelayout}{\\fontsize{6\\p@}{9\\p@}\\sffamily\\mdseries}
%   \\let\\oldfootnoterule\\footnoterule
%   \\renewcommand{\\footnoterule}{\\noindent\\textcolor{black!50}{\\rule{\\textwidth}{0.5\\p@}}\\vskip2\\p@}

\\def\\@fpfootnotes{}
\\newcommand{\\blfootnote}[1]{\\appto{\\@fpfootnotes}{#1\\par}}


%% Headers
\\RequirePackage{fancyhdr}
\\fancyhf{}
\\renewcommand{\\headrule}{}
\\fancyhead[LO]{{\\fontsize{11\\p@}{15\\p@}\\sffamily\\mdseries%
  \\setlength{\\arrayrulewidth}{.5\\p@}%
  \\arrayrulecolor{black}%
  \\begin{tabularx}{\\textwidth}{@{}X r r@{}}%
  \\if@review\\begingroup\\normalsize Manuscript by\\ \\ \\endgroup\\fi \\textsc{\\@runningauthor} & {\\textsc{%
  \\if@empirical Empirical\\fi%
  \\if@rga Rejected Grant Application\\fi%
  \\if@reflection Reflection\\fi%
  \\if@editorial Editorial\\fi%
  \\if@meta Meta-Research\\fi%
  \\if@review Peer Review\\fi%
  }} & \\raisebox{-0.1em}{\\includegraphics[height=1.3em]{media/jote_logo_only}}  \\\\\\hline
  \\end{tabularx}%
}}


\\fancyhead[LE]{{\\fontsize{11\\p@}{15\\p@}\\sffamily\\mdseries%
  \\setlength{\\arrayrulewidth}{.5\\p@}%
  \\arrayrulecolor{black}%
  \\begin{tabularx}{\\textwidth}{@{} l l >{\\raggedleft\\arraybackslash}X @{}}%
   \\raisebox{-0.1em}{\\includegraphics[height=1.3em]{media/jote_logo_only}} & {\\textsc{%
  \\if@empirical Empirical \\fi%
  \\if@rga Rejected Grant Application \\fi%
  \\if@reflection Reflection \\fi%
  \\if@editorial Editorial \\fi%
  \\if@meta Meta-Research \\fi%
    \\if@review Peer Review\\fi%
  }} & \\if@review\\begingroup\\normalsize Manuscript by\\ \\  \\endgroup\\fi\\textsc{\\@runningauthor}\\\\\\hline
  %\\multicolumn{1}{@{}c}{} &
  %\\raisebox{0.25em}[0pt][0pt]{\\colorbox{white}{\\includegraphics[height=2.5em]{./media/jote_logo_only}}} &
  %\\quad%
  %\\raisebox{0pt}[0pt][0pt]{\\includegraphics[height=2.5em]{./jote-logo}}\\\\
  \\end{tabularx}%
}}
\\fancyfoot[LO]{%\\fontsize{7\\p@}{10pt}\\sffamily\\mdseries%
%   \\setlength{\\arrayrulewidth}{.5\\p@}%
%   \\arrayrulecolor{black}\\raggedright%
%   This is an open access article under the terms of the Creative Commons Attribution License, which permits use, distribution and reproduction in any medium, provided the original work is properly cited.\\\\[3\\p@]
%   \\begingroup
  \\fontsize{7\\p@}{13\\p@}\\sffamily\\mdseries%
  \\begin{tabularx}{\\textwidth}{@{}X  r @{}}%
  \\hline
  \\textit{\\@jname}~ \\@jyear~ \\if@review \\else \\if@issue \\textit{\\@jvolume}(\\@jissue),~ \\@jpages\\fi\\fi &
    View interactive version \\href{https://doi.org/\\@paperdoi\\if@review .pr\\ifdefempty{\\@prround}{1}{\\@prround}\\fi}{here}.
  %\\textcopyright~\\@jyear\\space jote Periodicals, Inc. &
  \\end{tabularx}%
  }

\\fancyfoot[LE]{%\\fontsize{7\\p@}{10pt}\\sffamily\\mdseries%
%   \\setlength{\\arrayrulewidth}{.5\\p@}%
%   \\arrayrulecolor{black}\\raggedright%
%   This is an open access article under the terms of the Creative Commons Attribution License, which permits use, distribution and reproduction in any medium, provided the original work is properly cited.\\\\[3\\p@]
%   \\begingroup
  \\fontsize{7\\p@}{13\\p@}\\sffamily\\mdseries%
  \\begin{tabularx}{\\textwidth}{@{}X  r @{}}%
  \\hline
  View interactive version  \\href{\\@paperdoi\\if@review .pr\\ifdefempty{\\@prround}{1}{\\@prround}\\fi}{here}. &
    \\textit{\\@jname}~ \\@jyear~ \\if@review \\else\\if@issue \\textit{\\@jvolume}(\\@jissue),~ \\@jpages\\fi \\fi
  %\\textcopyright~\\@jyear\\space jote Periodicals, Inc. &
  \\end{tabularx}%
  }


%% First page header + footer %fph
\\fancypagestyle{firstpage}{
%   \\renewcommand{\\footrule}{\\hdashrule{\\textwidth}{0.5\\p@}{2\\p@}\\\\[-2\\p@]}
  \\fancyhead[L]{%
      \\fontsize{7\\p@}{13\\p@}\\sffamily\\mdseries% setfont
      \\setlength{\\arrayrulewidth}{1\\p@}% set thickness line
      \\arrayrulecolor{jotedark}%
      \\begin{tabularx}{\\textwidth}{@{}X >{\\raggedleft\\arraybackslash}X@{}@{}}%
          \\ifdefempty{\\@paperpublished}{&  }{%
          \\textit{\\@jname}~ \\  \\if@issue \\@jyear~ \\textit{\\@jvolume}\\if@review\\else(\\@jissue),\\fi~ \\@jpages \\else \\@paperpublished \\fi} &
          {\\fontsize{11\\p@}{15\\p@}\\textsc{%
          \\if@empirical Empirical \\fi%
          \\if@rga Rejected Grant Application \\fi%
          \\if@reflection Reflection \\fi%
          \\if@editorial Editorial \\fi%
          \\if@meta Meta-Research \\fi%
        \\if@review Peer Review\\fi%
          }}
          \\\\
          \\hline
          \\ifdefempty{\\@paperdoi}{}{\\multicolumn{1}{@{}l}{\\href{https://doi.org/\\@paperdoi\\if@review .pr\\ifdefempty{\\@prround}{1}{\\@prround}\\fi}{https://doi.org/\\@paperdoi\\if@review .pr\\ifdefempty{\\@prround}{1}{\\@prround}\\fi}}} & %\\multicolumn{1}{c}{}& \\multicolumn{1}{c}{}&%\\multicolumn{1}{c}{{\\fontsize{9\\p@}{15\\p@}\\bfseries Journal of Trial and Error}}&
            \\if@issue \\else\\fi
      \\end{tabularx}
  }

  \\fancyfoot[L]{%\\fontsize{7\\p@}{10pt}\\sffamily\\mdseries%
  \\setlength{\\arrayrulewidth}{.5\\p@}%
%   \\arrayrulecolor{black}\\raggedright%
%   This is an open access article under the terms of the Creative Commons Attribution License, which permits use, distribution and reproduction in any medium, provided the original work is properly cited.\\\\[3\\p@]
%   \\begingroup
  \\arrayrulecolor{black}%
  \\fontsize{7\\p@}{13\\p@}\\sffamily\\mdseries%
  \\begin{tabularx}{\\textwidth}{@{}l@{}  l@{}  l >{\\raggedleft\\arraybackslash}X @{}}%
  \\hline
  %
  % All this mess is to assure that any combination of \\@paperpublished, \\@paperreceived and \\@paperaccepted will work. It only assumes that \\@paperpublished is there, the other two can be there in any combination. Just trust me, it's not worth going through
  %
  \\ifdefempty{\\@paperreceived}%
    {\\ifdefempty{\\@paperaccepted}%
    {\\multicolumn{1}{@{}l}{\\textit{Published\\ifdefempty{\\@rolling}{\\if@review \\ Online\\fi}{ Online}:} \\@paperpublished}}
    {\\textit{Accepted:} \\@paperaccepted, }%
    }
  {\\textit{Received:} \\@paperreceived, } &
  \\ifdefempty{\\@paperreceived}%
    {\\ifdefempty{\\@paperaccepted}%
        {\\multicolumn{1}{@{}l}{}}%
    {\\multicolumn{1}{@{}l}{\\textit{Published\\ifdefempty{\\@rolling}{}{ Online}:} \\@paperpublished}}
    }
  {%
    \\ifdefempty{\\@paperaccepted}%
        {\\ifdefempty{\\@paperreceived}{\\multicolumn{1}{l}{}}{\\multicolumn{1}{l}{\\textit{Published\\ifdefempty{\\@rolling}{}{ Online}:} \\@paperpublished}}}
    %
    {\\textit{Accepted:} \\@paperaccepted, }
    }&
  \\ifdefempty{\\@paperreceived}%
    {\\multicolumn{1}{l}{}
    }{%
  \\ifdefempty{\\@paperaccepted}%
        {\\multicolumn{1}{c}{}}%
    {\\textit{Published\\ifdefempty{\\@rolling}{}{ Online}:} \\@paperpublished}}%
    &
  \\href{\\@jwebsite}{https://www.jtrialerror.com}
  %\\textcopyright~\\@jyear\\space jote Periodicals, Inc. &
  \\end{tabularx}%
%   \\endgroup
  }
}

% For adding notes about author contributions
\\newcommand{\\contrib}[2][]{%
  \\blfootnote{\\textsuperscript{#1}#2}%
}


% Author and affiliation fonts
\\setcounter{Maxaffil}{1}
\\renewcommand{\\Authsep}{,\\text{ } }
\\renewcommand{\\Authand}{,\\text{ } }
\\renewcommand{\\Authands}{,\\text{ } }
\\renewcommand{\\Authfont}{\\fontsize{12\\p@}{18\\p@}\\sffamily\\mdseries\\raggedright}
\\renewcommand{\\Affilfont}{\\fontsize{7\\p@}{10pt}\\sffamily\\mdseries\\raggedright}
\\renewcommand\\AB@authnote[1]{\\textsuperscript{#1}}
\\patchcmd{\\AB@affilsepx}{\\\\}{\\\\[3\\p@]}{}{}

\\patchcmd{\\@author}{\\AB@authlist\\\\[\\affilsep]\\AB@affillist}{\\AB@authlist}{}{}

%\\pretocmd\\AB@affillist{\\ifdefempty{\\@companionurl}{}%
%  {%
%  \\href{\\@companionurl}{\\textbf{companion Piece}\\ifdefempty{\\AB@companiontitle}{}{\\text{: }\\@companiontitle}}}\\par%
%  \\ifdefempty{\\@companionabstract}{}%
%  {%
%  \\@companionabstract}%
%  \\vskip5pt%
%  }{}{}


% % \\AtBeginDocument{
%   \\if@blindreview
%     \\let\\oldauthor\\author
%     \\let\\oldaffil\\affil
%     \\renewcommand{\\author}[2][]{\\oldauthor{Author}}
%     \\renewcommand{\\affil}[2][]{\\oldaffil{An affiliation}}
% % %     \\def\\AB@authors{Anonymous Authors}
% %     \\def\\AB@affillist{Anonymous Affiliations}
%   \\fi
% % }
%\\RequirePackage{etoolbox,xpatch}
%\\RequirePackage{ifxetex,ifluatex}
%\\RequirePackage{setspace}
%\\RequirePackage[table]{xcolor}
%\\RequirePackage{graphicx}
%\\RequirePackage{geometry}
%\\RequirePackage{rotating}
%\\RequirePackage{titlesec}
%\\RequirePackage{fancyhdr}
%\\RequirePackage[style]{abstract}
%\\RequirePackage[marginal]{footmisc}
%\\RequirePackage{caption,subcaption}
%\\RequirePackage{enumitem}
%\\RequirePackage{authblk}
%\\RequirePackage{textcomp}
%\\RequirePackage[absolute]{textpos}
%\\RequirePackage[right]{lineno}
%\\RequirePackage{amsmath}

%Experiment with new no abstract front
\\newcommand{\\more@metadata}{%
  \\emph{\\bfseries \\@jname\\ (\\@jyear)}\\par
  \\textcolor{jotedark}{\\bfseries Wordcount: }3826\\par
  \\textcolor{jotedark}{\\bfseries Correspondence}\\\\ \\@corraddress \\@corremail\\par

  \\textcopyright\\space The Author(s) \\jyear.
.%
}
%\\newcommand{\\@cover@logo}{%
%  \\begin{textblock*}{4cm}[1,0](\\dimexpr\\Gm@lmargin-1cm,\\Gm@tmargin)
%  \\fontsize{60\\p@}{60\\p@}\\sffamily\\mdseries\\raggedleft%
%  \\textcolor{PANMaroon}{PA}
%  \\end{textblock*}
%}
\\newcommand{\\@insert@metadata}{%
  \\begin{textblock*}{3.3cm}[0,1](1cm,\\dimexpr\\paperheight-\\Gm@bmargin\\relax)
  \\scriptsize\\raggedright%
  \\setlength{\\parskip}{\\baselineskip}%
  \\setlength{\\parindent}{\\z@}%
  \\more@metadata\\par
  \\end{textblock*}
}
%\\renewcommand{\\@maketitle}{%
  %\\@cover@logo%
%  \\@insert@metadata%
%  \\noindent\\begin{minipage}{0.9\\linewidth}
%  \\raggedright\\setstretch{1.0}
%  {\\LARGE\\bfseries\\@title\\par}
%  \\vskip\\baselineskip
%  \\@author\\par
%  \\end{minipage}\\bigskip\\normalfont\\normalsize%
%}


% Title
\\renewcommand{\\maketitle}{%
  \\if@blindreview
    \\def\\AB@authlist{\\Authfont Anonymous Authors}
    \\def\\AB@affillist{\\Affilfont Anonymous Affiliations}
    \\def\\@runningauthor{Authors (Anon)}
    \\def\\@corraddress{Anonymous correspondence}
    \\def\\@corremail{anon@example.com}
    \\def\\@presentaddress{Anonymous present address}
    \\def\\@fundinginfo{Anonymous funders}
  \\fi
  \\vspace*{\\baselineskip}%
%  \\noindent\\begingroup%
%  \\setul{3\\p@}{1\\p@}%
%  \\if@useserif
%    \\bfseries%
%  \\else
%    \\ifxetexorluatex\\fontspec{Lato Heavy}\\else\\fontseries{eb}\\sffamily\\mdseries\\fi%
%  \\fi
%  {\\fontsize{9\\p@}{15\\p@}\\allcaps[\\ifxetexorluatex 20\\else 200\\fi]{\\ul{\\@papertype}}}
%  \\ifdefempty{\\@jlogo}{\\rule{0pt}{2em}}{%
%  \\hfill%
%   \\includegraphics[height=1.5em]{jote_Wordmark_black}%
%   \\quad%
%  \\\\[2\\p@]%
%  {\\fontsize{8\\p@}{15\\p@}%
%  \\ifxetexorluatex
%    \\addfontfeature{LetterSpace=20.0}\\@paperfield%
%  \\else
%    \\ifpdf
%    \\textls*[150]{\\@paperfield}%
%    \\else
%    \\@paperfield
%    \\fi
%  \\fi}
%  \\endgroup%
  %\\vskip13\\p@%
  \\noindent\\vspace*{-1.2\\baselineskip}%
  \\renewcommand{\\tabcolsep}{0pt}%
  \\begin{tabular}{p{0.8\\textwidth} >{\\raggedleft\\arraybackslash}p{0.2\\linewidth}}%
  \\begin{tabular}{>{\\raggedright\\arraybackslash}p{0.8\\textwidth}}
        {\\fontsize{22\\p@}{26\\p@}\\sffamily\\bfseries\\if@review Peer Review \\ifdefempty{\\@prround}{}{Round \\@prround\\ }of \\enquote{\\@title}\\else\\@title\\fi}%
        \\ifdefempty{\\@subtitle}{}{\\vspace*{0.6\\baselineskip}{\\fontsize{12\\p@}{16\\p@}\\itshape\\@subtitle}}
  \\end{tabular}
  &%
  \\begin{tabular}{r}
      \\raisebox{0\\height}{\\includegraphics[width = 0.15\\textwidth]{\\@jlogo}}
  \\end{tabular}%
  \\end{tabular}%
  \\vskip24\\p@%
  \\noindent\\begin{minipage}{0.8\\textwidth}\\@author\\end{minipage}%
  %\\vskip12\\p@%
  %\\vspace*{-1\\baselineskip}%
  \\thispagestyle{firstpage}
  \\renewcommand{\\tabcolsep}{6pt}

  %\\@insert@metadata

  %inserts metadata on its own line if there's no abstract
  \\ifdefempty{\\@noabstract}{}{\\jote@affilmetadata%
    \\vspace{\\baselineskip} \\hrule \\vspace{2\\baselineskip}
}
}

% Affiliation + other metadata
\\newcommand{\\jote@affilmetadata}{%
  %\\vspace*{-1\\baselineskip}%
  \\vskip10pt%
  \\AB@affillist\\par%
  \\if@review
  \\vskip5pt
  This is \\ifdefempty{\\@prround}{the originally submitted version}{submission \\#\\@prround} of \\ifdefempty{\\@noabstract}{}{\\vskip0pt}\\enquote{\\@title}\\ifdefempty{\\@noabstract}{}{\\vskip0pt} with \\ifdefempty{\\@prround}{}{round \\@prround of the} peer review comments attached.
  \\vskip5pt
  \\textbf{Original author(s):} \\vskip1pt \\textit{\\@ogauthor}.
  \\vskip5pt
  \\textbf{Published version:}\\vskip1pt \\href{https://doi.org/\\@paperdoi}{https://doi.org/\\@paperdoi}.
  \\vskip5pt
  \\textbf{How to read:} \\vskip1pt Sections which have peer review comments are marked by $\\bigblacktriangledown$ or \\hyperref[sec:reviews]{links},\\ifdefempty{\\@noabstract}{}{\\vskip0pt} clicking which directs you to said comments.\\ifdefempty{\\@noabstract}{}{\\vskip0pt} The reviews contain links referring back to the original section.
  \\vskip5pt
  \\else
  \\ifdefempty{\\@contributions}{}{\\authfn{2}\\@contributions}
  \\vskip5pt
  \\textbf{Correspondence:}
  \\@corraddress\\vskip5pt
  \\ifdefempty{\\@corremail}{}{Email: \\@corremail
    \\vskip5pt%
  }
  \\ifx\\empty\\@presentaddress
  \\else%
    \\vskip5pt%
    \\textbf{Present address}\\vskip5pt
    \\@presentaddress\\par
  \\fi%
  \\ifdefempty{\\@rgainfo}{}{%
   \\textbf{Grant Application to: }%
   \\@rgainfo \\vskip5pt}%
  \\ifdefempty{\\@funding}{}{%
    \\textbf{Funding: }%
    \\@funding \\vskip5pt}%
  \\ifdefempty{\\@companionkey}{%
    \\ifdefempty{\\@acknowledgments}{}{\\textbf{Acknowledgments: }%\\textit{}
    \\@acknowledgments\\vskip5pt }}{}%
    \\ifdefempty{\\@companionkey}{\\vskip5pt}{%
  \\textbf{Companion Piece:} %
  \\if@empirical This paper has an accompanying reflection piece, \\fi%
  \\if@reflection This paper reflects on a previously published empirical article, \\fi%
  \\hyperlink{companion}{\\@companiontitle}. Read the abstract at the end of this article.\\vskip5pt}
  %\\textit{The views expressed by the author(s) do not necessarily reflect those of the journal.}%
  \\vskip5pt
  \\href{https://crossmark.crossref.org/dialog/?doi=\\@paperdoi\\&domain=pdf\\&date_stamp=\\@paperpublisheddate}{\\includegraphics[height=2.3em]{media/CROSSMARK_Color_horizontal.png}}
 \\fi
  %{\\begin{flushleft}{\\fontsize{10\\p@}{13\\p@}\\sffamily\\mdseries%
  %\\hrule \\vskip5pt% Draws horizontal line above Companion title
  %\\end{flushleft}}%
  %\\ifdefempty{\\@companionabstract}{}%
  %{\\begin{justify}\\begin{spacing}{0.75}%
  %{\\vspace{-.75\\baselineskip}\\fontsize{7\\p@}{10pt}\\sffamily\\mdseries%
  %\\@companionabstract}%
  %\\end{spacing}\\end{justify}%
  %}%
}

%% Abbreviations in the footnote
\\newcommand{\\abbrevs}[1]{\\blfootnote{\\textbf{Abbreviations:} #1\\\\[-3\\p@]}}

%% Abstract and affiliation in the margin
\\RequirePackage{changepage}
\\RequirePackage{environ}
\\RequirePackage{marginnote}
\\newlength{\\jote@affilmetadataheight}
\\newlength{\\jote@abstractheight}
\\newlength{\\jote@newaffilwidth}
\\newlength{\\jote@newabstractwidth}
\\newlength{\\jote@newheight}
\\NewEnviron{jote@abstract}{%
  \\newcommand{\\keywords}[1]{%
    \\vskip8\\p@%
    \\noindent{\\sffamily\\bfseries\\fontsize{7\\p@}{13\\p@}\\allcaps[\\ifxetexorluatex 20\\else 200\\fi]{keywords}\\par}
    \\noindent{\\raggedright\\fontsize{8\\p@}{13\\p@}\\sffamily\\mdseries ##1\\par}
  }%
  \\strictpagecheck%
  \\ifdefempty{\\@noabstract}{
  \\settototalheight{\\jote@affilmetadataheight}{\\parbox{\\marginparwidth}{\\jote@affilmetadata}}%
  %\\setlength{\\jote@affilmetadataheight}{.7\\jote@affilmetadataheight}
  \\showthe\\jote@affilmetadataheight
  \\settototalheight{\\jote@abstractheight}{\\parbox{\\linewidth}{\\@abstracttext}}%
  \\setlength{\\jote@newheight}{{\\dimexpr \\jote@affilmetadataheight*\\marginparwidth/\\textwidth+\\jote@abstractheight*\\marginparwidth/\\textwidth\\relax}}
  \\setlength{\\jote@newabstractwidth}{{\\dimexpr \\jote@abstractheight*\\marginparwidth/\\jote@newheight\\relax}}
  \\setlength{\\jote@newaffilwidth}{{\\dimexpr \\jote@affilmetadataheight*\\marginparwidth/\\jote@newheight\\relax}}
    \\message{The affilmetadataheight is \\the\\jote@affilmetadataheight. The abstractheight is \\the\\jote@abstractheight. The newheight is \\the\\jote@newheight. The newaffilwidth is \\the\\jote@newaffilwidth. The newabstractwidth is \\the\\jote@newabstractwidth. The textwidth is \\the\\textwidth. The marginparwidth is \\the\\marginparwidth.}
  %\\begin{adjustwidth*}{\\dimexpr \\jote@newheight+0\\p@}{}%
  %\\setlength{\\marginparwidth}{\\jote@newaffilwidth}%
  %\\setlength{\\marginparsep}{-\\jote@newaffilwidth}%
  \\checkoddpage
  \\ifoddpage \\reversemarginpar  \\begin{adjustwidth*}{\\dimexpr \\@heightabstract+0\\p@}{}%
  \\else  \\reversemarginpar \\begin{adjustwidth*}{}{\\dimexpr \\@heightabstract+0\\p@}%
  \\fi

  %% Measure the height of the affil metadata in the sidebar
  \\setlength{\\marginparwidth}{\\@widthaffil}%
  \\setlength{\\marginparsep}{-\\@widthaffil}%
  %\\newsavebox{\\jote@abstractbox}%
  \\marginnote{\\jote@affilmetadata}%
  %\\begin{mdframed}[font=\\fontsize{9\\p@}{15\\p@}\\sffamily\\mdseries,
    % innerbottommargin = .5,
    % skipbelow = 0,
  %  topline=false,bottomline=false,
  %  leftline=true,rightline=false,
  %  backgroundcolor=jote,
  %  middlelinewidth=6\\p@, middlelinecolor=white,
  %  outerlinewidth=0.5\\p@]%
  %  \\BODY%
  %\\end{mdframed}%
  \\begin{tcolorbox}[enhanced, sharp corners, colback=jote, boxrule=0pt, frame hidden,  top = 5pt, bottom =5pt, left = 10pt, right=10pt, borderline west={.5pt}{-6.5pt}{black}, left skip = 6.5pt, boxsep=0pt, fontupper =\\fontsize{9\\p@}{15\\p@}\\sffamily\\mdseries ]
    \\phantomsection \\addcontentsline{toc}{section}{Abstract} \\section*{\\color{black}{Abstract}}
    \\BODY
    \\keywords{\\textit{\\@keywordsabstract}}
  \\end{tcolorbox}
  \\vspace*{\\baselineskip}
  %\\settototalheight{\\jote@abstractheight}{\\usebox{\\jote@abstractbox}}%
  %\\vspace*{-1\\baselineskip}
  %% If the affildata is taller than the abstract, add vskip
  %\\ifdimgreater
  %  {\\jote@affilmetadataheight}
  %  {\\jote@abstractheight}
  %  {\\vskip\\dimexpr\\jote@affilmetadataheight-\\jote@abstractheight+1.5\\baselineskip\\relax}
  %  {\\vskip1.5\\baselineskip}
  }{} %end of ifdefempty(noabstract)
}[\\end{adjustwidth*}]%

\\renewcommand{\\abstract}{\\jote@abstract}
\\renewcommand{\\endabstract}{\\endjote@abstract}

\\newcommand{\\thefpfootnotes}{%
  \\noindent\\textcolor{black!50}{\\rule{\\textwidth}{0.5\\p@}}\\\\
  {\\fontsize{6\\p@}{9\\p@}\\selectfont
  \\@fpfootnotes}
}

%% v1.4: Add two-column mode
\\NewEnviron{frontmatter}{%
  \\if@twocolumn
    \\let\\oldclearpage\\clearpage
    \\let\\clearpage\\relax
    \\ifdefvoid{\\@fpfootnotes}{}{%
      \\begin{figure*}[b!]
      \\thefpfootnotes
      \\end{figure*}
    }
    \\twocolumn[\\@twocolumnfalse\\setlength\\parindent{2em}\\BODY]
    \\let\\clearpage\\oldclearpage
  \\else
    \\BODY
  \\fi%
}

% v1.4: Add line numbers too
\\if@jote@lineno
  \\AfterEndEnvironment{frontmatter}{\\linenumbers}
  \\if@twocolumn\\else
    \\AfterEndEnvironment{abstract}{\\linenumbers}
  \\fi
\\fi

\\if@twocolumn\\else
  \\appto{\\maketitle}{%
    \\ifdefvoid{\\@fpfootnotes}{}{%
      \\begin{figure*}[b!]
      \\thefpfootnotes
      \\end{figure*}
    }
  }
\\fi

% quotes and epigraphs
\\RequirePackage{quoting}
\\quotingsetup{vskip=\\baselineskip,indentfirst=false,leftmargin=26\\p@,rightmargin=26\\p@}

\\renewenvironment{quote}{\\begin{quoting}}{\\end{quoting}}

\\renewenvironment{quotation}{\\begin{quoting}}{\\end{quoting}}

\\newenvironment{epigraph}[1]
{\\begin{quoting}\\def\\@quotesource{#1}}
{\\par\\hfill\\@quotesource\\end{quoting}}

\\newenvironment{pullquote}
{\\begin{quoting}[vskip=\\dimexpr 39\\p@-23\\p@\\relax,leftmargin=12\\p@,rightmargin=12\\p@,font+={raggedright},begintext={\\fontsize{18\\p@}{23\\p@}\\sffamily\\mdseries\\color{black!50}}]}
{\\end{quoting}}

% Enum/itemized
\\RequirePackage[inline]{enumitem}
\\setlist{nosep,font=\\bfseries,leftmargin=*,align=left}
\\setlist[1]{topsep=\\baselineskip,leftmargin=\\parindent,labelsep=*,labelwidth=*}
\\setlist[enumerate,2]{label={\\alph*.},}

% Space above/below equations
\\g@addto@macro\\normalsize{%
  \\setlength\\abovedisplayskip{\\baselineskip}%
  \\setlength\\belowdisplayskip{\\baselineskip}%
  \\setlength\\abovedisplayshortskip{\\baselineskip}%
  \\setlength\\belowdisplayshortskip{\\baselineskip}%
}

% All the popular math environments
\\newtheorem{theorem}{Theorem}
\\newtheorem{lemma}{Lemma}
\\newtheorem{proposition}{Proposition}
\\newtheorem{corollary}{Corollary}

\\newenvironment{proof}[1][Proof]{\\begin{trivlist}
\\item[\\hskip \\labelsep {\\bfseries #1}]}{\\end{trivlist}}
\\newenvironment{definition}[1][Definition]{\\begin{trivlist}
\\item[\\hskip \\labelsep {\\bfseries #1}]}{\\end{trivlist}}
\\newenvironment{example}[1][Example]{\\begin{trivlist}
\\item[\\hskip \\labelsep {\\bfseries #1}]}{\\end{trivlist}}
\\newenvironment{remark}[1][Remark]{\\begin{trivlist}
\\item[\\hskip \\labelsep {\\bfseries #1}]}{\\end{trivlist}}

\\newcommand{\\qed}{\\nobreak \\ifvmode \\relax \\else
      \\ifdim\\lastskip<1.5em \\hskip-\\lastskip
      \\hskip1.5em plus0em minus0.5em \\fi \\nobreak
      \\vrule height0.75em width0.5em depth0.25em\\fi}

% Captions
\\RequirePackage[tableposition=top]{caption}
\\DeclareCaptionFont{captionfont}{\\fontsize{8\\p@}{11\\p@}\\sffamily\\mdseries}
\\DeclareCaptionFont{labelfont}{\\color{jotedark}\\fontsize{8\\p@}{11\\p@}\\sffamily\\bfseries}
\\DeclareCaptionFont{boxcaption}{\\fontsize{9\\p@}{13\\p@}\\sffamily\\bfseries}
\\ifxetexorluatex
  \\DeclareCaptionFont{heavy}{\\fontspec{Lato Black}}
  \\DeclareCaptionLabelFormat{allcaps}{\\addfontfeature{LetterSpace=15.0}{\\MakeTextUppercase{#1}~#2}}
\\else
  \\DeclareCaptionFont{heavy}{\\fontfamily{lato-TLF}\\fontseries{eb}\\selectfont}
  \\ifpdf
  \\DeclareCaptionLabelFormat{allcaps}{\\textls[150]{\\MakeTextUppercase{#1}~#2}}
  \\else
  \\DeclareCaptionLabelFormat{allcaps}{\\MakeTextUppercase{#1}~#2}
  \\fi
\\fi
\\if@useserif
  \\captionsetup*{justification=raggedright,singlelinecheck=false,font=captionfont,labelformat=allcaps,labelfont=labelfont,labelsep=quad}
\\else
  \\captionsetup*{justification=raggedright,singlelinecheck=false,font=captionfont,labelformat=allcaps,labelfont={heavy},labelsep=quad}
\\fi
%\\captionsetup*[table]{skip=0.5ex}

% Tables
\\AtBeginEnvironment{table}{%
  \\fontsize{7\\p@}{10\\p@}\\sffamily\\mdseries%
  \\rowcolors*{3}{cyan!10}{}%
  \\renewcommand{\\arraystretch}{1.25}%
  \\arrayrulecolor{cyan!30}%
  \\setlength{\\arrayrulewidth}{1\\p@}%
}
\\AtBeginEnvironment{table*}{%
  \\fontsize{7\\p@}{10\\p@}\\sffamily\\mdseries%
  \\rowcolors*{3}{cyan!10}{}%
  \\renewcommand{\\arraystretch}{1.25}%
  \\arrayrulecolor{cyan!20}%
  \\setlength{\\arrayrulewidth}{1\\p@}%
}
\\RequirePackage{threeparttable}
\\renewcommand{\\TPTnoteSettings}{\\leftmargin=0pt}
\\newcommand{\\headrow}{\\rowcolor{black!20}}
\\newcommand{\\thead}[1]{\\multicolumn{1}{l}{\\bfseries #1\\rule[-1.2ex]{0pt}{2em}}}

%% Boxes!
\\RequirePackage{stfloats}
\\RequirePackage{newfloat}
\\DeclareFloatingEnvironment[placement=bt,name=box]{featurebox}
\\captionsetup*[featurebox]{skip=1em,labelformat={default},font={heavy,boxcaption},labelfont={sc,color=black!75}}
\\AtBeginEnvironment{featurebox}{%
  \\setlist*{topsep=0pt}%
}
\\apptocmd{\\featurebox}{%
  \\begin{mdframed}[linewidth=5\\p@,linecolor=black!20,
  innerleftmargin=12\\p@,innerrightmargin=12\\p@,
  innertopmargin=12\\p@,innerbottommargin=12\\p@]
}{}{}
\\pretocmd{\\endfeaturebox}{\\end{mdframed}}{}{}


% Skips for floats
\\setlength{\\floatsep}{1.5\\baselineskip}
\\setlength{\\intextsep}{\\baselineskip}
\\setlength{\\textfloatsep}{1.5\\baselineskip}

% The endnotes
\\RequirePackage{enotez}
\\newlist{enotezlist}{enumerate}{1}
\\setlist[enotezlist,1]{leftmargin=*,label=\\arabic*,labelsep=0.25em,itemsep=0pt,topsep=0.5\\baselineskip}
\\EditInstance{enotez-list}{itemize}
{list-type=enotezlist}
\\setenotez{list-name={endnotes},list-style=itemize}
\\EditInstance{enotez-list}{itemize}{
  format=\\fontsize{7\\p@}{10\\p@}\\selectfont,
  number = \\textsuperscript{#1}
}

% References
\\if@numeric
  \\RequirePackage[backend=biber, citestyle=numeric-comp, sorting=none, bibstyle=apa]{biblatex}
  \\AtEndPreamble{\\makeatletter
    \\input{numeric.bbx}
  \\makeatother}
\\fi
\\if@authordate
    \\RequirePackage[backend=biber, style=apa]{biblatex}
\\fi
\\if@amsrefs
  \\RequirePackage{amsrefs}
  \\let\\citep\\cite
  \\let\\citet\\ocite
  \\renewcommand{\\biblistfont}{\\fontsize{7\\p@}{10\\p@}\\selectfont}
\\fi

\\AtBeginDocument{
  \\@ifpackageloaded{natbib}{
    \\setlength{\\bibhang}{1.5em}
    \\renewcommand{\\bibfont}{\\fontsize{7\\p@}{10\\p@}\\selectfont}
    \\renewcommand{\\refname}{references}
    \\renewcommand{\\bibname}{references}
  }{}

  \\@ifpackageloaded{amsrefs}{
    \\renewcommand{\\biblistfont}{\\fontsize{7\\p@}{10\\p@}\\selectfont}
  \\renewcommand{\\refname}{references}
  \\renewcommand{\\bibname}{references}
  }{}
}

% Author biography
\\RequirePackage{lettrine}
\\newenvironment{biography}[2][]
{\\begin{mdframed}
  [linewidth=0.5\\p@,skipabove=1.5\\baselineskip,%nobreak,
    innerleftmargin=6\\p@,innerrightmargin=6\\p@,
    innertopmargin=6\\p@,innerbottommargin=6\\p@]
  \\ifstrequal{#1}{}{}
  {\\lettrine[image,lines=5,findent=1em,nindent=0pt]{#1}{}}%
  {\\bfseries\\scshape #2}}
{\\end{mdframed}}

\\newcommand{\\otherinfo}[2][]{%
  \\backmatter%
  \\ifstrequal{#1}{suppinfo}
  {\\section{Supporting Information}
  Additional Supporting Information may be found online in the supporting information for this article.}
  {}

  \\begin{mdframed}
  [linewidth=1\\p@,linecolor=black!40,nobreak,
    innerleftmargin=12\\p@,innerrightmargin=12\\p@,
    innertopmargin=12\\p@,innerbottommargin=12\\p@,
    skipabove=\\baselineskip]
  \\textbf{How to cite this article:} #2
  \\end{mdframed}
}

\\newenvironment{graphicalabstract}[1]{%
  \\backmatter
  \\section{graphical abstract}
  \\lettrine[image,lines=10,findent=1em,nindent=0pt]{#1}{}%
}{}

%Append all the necessecary things after the references (license, copyright, acknowledgements)
\\RequirePackage{wrapfig}
\\apptocmd{\\printbibliography}{%
\\if@seplic \\else
    \\ifdefempty{\\@companionkey}{}{
    \\ifdefempty{\\@acknowledgments}{}{%
    \\section*{Acknowledgments}%
    \\@acknowledgments}}%
    %\\ifdefempty{\\@contributions}{}{%
    %\\vskip200pt
    %\\section*{Author Contributions}%
    %\\@contributions}%
    %
    \\ifdefempty{\\@interests}{}{\\section*{Conflict of Interest}\\@interests}%
    \\ifdefempty{\\@companionabstract}{}{\\phantomsection \\addcontentsline{toc}{section}{Companion Piece}
        \\hypertarget{companion}{\\section*{Companion Piece}}
        %\\@companiontitle \\newline
        \\noindent\\paragraph{Abstract.}\\@companionabstract \\newline
        \\noindent \\fullcite{\\@companionkey}
    }
      \\fi
  }{}{}

\\RequirePackage{ftnright} %Puts footnotes in the righthand corner always

\\AtEndPreamble{
\\makeatletter
\\newcommand*{\\cleartoleftpage}{%
  \\clearpage
    \\if@twoside
    \\ifodd\\c@page
      \\hbox{}\\newpage
      \\if@twocolumn
        \\hbox{}\\newpage
      \\fi
    \\fi
  \\fi
}
\\makeatother
}
%\\makeatletter
%\\renewenvironment{table}%
%  \\renewcommand{\\familydefault}{\\fontfamily{lato-TLF}\\sffamily\\mdseries
%  \\@float{table}}
%  {\\end@float}
%\\makeatother
%}
% Here we go!
\\normalsize
\\pagestyle{fancy}
\\AtBeginDocument{%
  \\robustify{\\ref}
  \\robustify{\\cite}
  \\ifdef{\\citep}{\\robustify{\\citep}}{}
  \\ifdef{\\citet}{\\robustify{\\citet}}{}
}
`
