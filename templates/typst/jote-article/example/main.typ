// Example JOTE article, using the front matter and opening sections of
// Kohrt, Melinscak, McElreath & Schönbrodt (2026), "A Conceptual Framework for Computational
// Reproductions" (Journal of Trial & Error, CC BY 4.0), followed by a tour of the remaining
// template features.
//
// Build (from this directory):
//   typst compile --root .. --font-path <fonts> main.typ
// See ../README.md.

#import "../lib.typ": *

#show: jote-article.with(
  article-type: "meta",
  title: [A Conceptual Framework for Computational Reproductions: Formal Definitions and Epistemic Functions],
  authors: (
    (name: "Florian Kohrt", orcid: "0000-0003-0374-5625", affiliations: (1,)),
    (name: "Filip Melinscak", orcid: "0000-0001-8767-358X", affiliations: (2,)),
    (name: "Richard McElreath", orcid: "0000-0002-0387-5377", affiliations: (3,)),
    (name: "Felix Schönbrodt", orcid: "0000-0002-8282-3910", affiliations: (1,)),
  ),
  affiliations: (
    [Department of Psychology, Ludwig-Maximilians-Universität München, Munich, Germany],
    [Faculty of Psychology, University of Vienna, Vienna, Austria],
    [Department of Human Behavior, Ecology, and Culture, Max Planck Institute for Evolutionary Anthropology, Leipzig, Germany],
  ),
  running-author: "Kohrt et al.",
  correspondence: (
    address: [Ludwig-Maximilians-Universität München],
    email: "felix.schoenbrodt@psy.lmu.de",
  ),
  journal: (name: "Journal of Trial & Error", website: "https://journal.trialanderror.org"),
  year: 2026,
  doi: "10.36850/9ec0-4fab",
  dates: (
    received: "December 5, 2024",
    accepted: "March 30, 2026",
    published: "July 24, 2026",
    published-iso: "2026-07-24",
  ),
  abstract: [Reproductions, which we define as “redoing activities” that work with the same collected data (or simulation source code) and aim to keep the computation as similar as possible, enable the verification of a scientific work. We seek to advance the understanding and conduct of reproductions by providing a conceptual framework and guidance to reproducers. In the first part, the epistemic function of reproductions and replications regarding mistakes—and consequently, faults—is discussed. In the second part, the logic underlying reproductions is formulated, accompanied by formal definitions of central terms. The third and final part provides practical guidance on conducting and reporting reproductions. In short, a reproduction involves performing another computation and comparing the results for consistency, exploring the impact of computational choices on results before suspecting faults as a last resort. Computational choices by reproducers are necessitated by obstacles such as underspecification and external constraints. Regarding faults, four cases are emphasized: (1) incoherent descriptions, (2) different collected data (or simulation source code), (3) different data analysis source code, and (4) incorrect reporting of results. Separate from evaluating the consistency of results, reproductions can investigate their support for a claim. Finally, improper reporting practices can reduce the epistemic value of scientific works and their reproductions. Therefore, reproducers should also report the scope of their reproduction by detailing, among other things, which results were targeted, which computational stages were redone, and which descriptions were consulted.],
  bibliography: bibliography("references.bib"),
  keywords: ("error", "reproduction", "meta-science", "conceptual framework", "verification", "epistemic function", "uncertainty"),
)

= Introduction and Previous Research

The increasing number of scientific works relying on computations requires conceptual clarity on how their trustworthiness can be improved. In the literature, early recommendations focused on the authors (e.g., Kelly et al., 2009; Nagler, 1995) and still do to a large degree. For example, Sandve et al. (2013) and Ziemann et al. (2023) both present lists of software development practices that support the dissemination of computational results. With a similar goal in mind, the UK Government Analytical Community (2020), Mineault et al. (2021), and Kohrt et al. (2024) created self-paced tutorials that equip researchers with a relevant skillset. Other resources draw explicitly from the authors' own reproduction (e.g., Krafczyk et al., 2021) or training experience (e.g., Wilson et al., 2017). Further, the idea of reporting standards for communicating computational results has been put forward, for example, in the fields of health sciences (Altman et al., 2008), statistics (Stodden, 2015), machine learning (Albertoni et al., 2023; Nordlie et al., 2009), and agent-based modeling (Grimm et al., 2014, 2020; Monks et al., 2019).

A second, less developed line of research specifically addresses the verification of computational results (e.g., Arguillas et al., 2022; Ivimey-Cook et al., 2023; Pilgrim et al., 2023). At present, researchers face several challenges during _redoing activities_:#footnote[Similar concepts also go by the name _reanalyses_ (Welch, 2019) and _repetitive research_ (Schöch, 2023).] scientific activities that redo some phases of a previous study. For example, when verifying the data analysis published in a previous study, the study may contain multiple results, and the researchers' time and resources may not be sufficient to calculate all of them. Then, it is up to the reproducers to select an appropriate and indicative set of results to reproduce, even if the original study does not contain any hints in this regard. Furthermore, the collected data may be unavailable or only available in preprocessed form. Similarly, the data analysis source code may not have been shared (or only partially) and may not run. Moreover, even if results are obtained eventually, they may differ from the original results, and it is unclear whether the verification was successful. Finally, the authors are often no longer available to ask for clarification.

This article sets out to address these challenges. Unlike some of the articles cited above, it does not give recommendations on what tools and software development techniques to use or which technical parameters to report. We rather aim to advance the conceptual understanding and the practical conduct of redoing activities with an emphasis on the computational aspects, particularly the data analysis.


== Terminological Issues

In existing conceptual work on redoing activities, many have noted that fields differ in how various redoing activities are named (Barba, 2018), contributing to a “confused terminology” (Plesser, 2018), although—or maybe because—many unifying definitions are proposed (Dreber & Johannesson, 2025; LeBel et al., 2018; National Information Standards Organization, 2021; Nichols et al., 2017; Patil et al., 2016a; Schöch, 2023). When creating typologies, researchers usually make distinctions that are important to their own field and research method, possibly creating jingle-jangle conflicts with other typologies where the same term refers to different concepts (jingle) or different terms refer to the same concept (jangle). For example, many typologies differentiate between redoing a study with the same data vs. using new data, by calling one “reproduction” and the other “replication”—but vary in their nomenclature, which is which (e.g., National Academies of Sciences, Engineering, and Medicine, 2019; Schöch, 2023). Adding to the confusion is the ambiguity of the term “data”, which can refer to the output of a data collection phase (collected data, i.e., basis for scientific inference) but also to the input to a data collection phase (parameter data, i.e., calibration or training data). Consequently, for some typologies using the same data means that no new experiment (nor sample or observation) is involved (e.g., Simkus et al., 2025), while for others both reproduction (same data) and replication (different data) involve conducting a new experiment (e.g., Association for Computing Machinery, 2020). The latter case is already the result of harmonization efforts driven by Heroux et al. (2018) who called for a compatible usage of the terms “reproduction” and “replication” across disciplines, suggesting a focus on internal consistency for the former (“doing things right”) and a focus on external consistency for the latter (“doing the right things”). In the field of computing science, the entire experiment may happen _in silico_ rather than _in natura_, making another data analysis alone less common than running both experiment and data analysis again. In silico means that collected data are solely obtained by means of computer programs, in an automated fashion, and pertain to computer programs. In other words, the data are about properties of the programs and not their environment. In contrast, in natura means that collected data pertain to the physical or social reality. Non-experimental research is not considered in all of these cases. This article focuses on collected data (the basis for scientific inference) and distinguishes “simulation source code” (any source code that generates collected data, even in the absence of a proper simulation) and “data analysis source code” (for scientific inference such as statistical analysis).

Finally, many definitions do not explicitly discern the redoing activity, the ability to conduct it, and its outcome—let alone agreeing on names for them (Penders et al., 2019)—making undetected conflicts even more likely. An exception to this comes from Goodman et al. (2016), who specifically differentiate the provision of details (methods reproducibility) and obtaining the same results (results reproducibility). They even add another category: drawing similar conclusions (inferential reproducibility). In the context of research assessment, Ulpts and Schneider (2024) suggest differentiating redoing (e.g., reproducing a previous study) from enabling (e.g., being transparent about the data analysis), as enabling can be a meaningful practice even when redoing is not (e.g., with certain qualitative research). They hold that in the case of confusion researchers should state explicitly what is being enabled or redone and for what reason. As an interim conclusion, the existing literature on redoing activities is in no agreement about which redoing activities to discern or what to call them. However, the literature suggests differentiating the act of enabling, the act of redoing, obtaining the same result, and reaching the same conclusion. The present article relies on the following novel, unifying definition of _reproduction_ (or synonymously _computational reproduction_#footnote[Note that some articles (e.g., Kambouris et al., 2024) use the term “computational reproduction” exclusively if the original data analysis source code is available and reused, while in this article it also refers to attempts where the data analysis source code has to be re-implemented.]): a redoing activity that works with the reported collected data (or the reported simulation source code, in the case of in silico works) and that aims to keep the data analysis as similar as possible. Further, the term _replication_ will be used to mean a redoing activity that works with newly collected data (or new simulation source code). This usage is largely compatible with both computing science and other fields.


== Epistemic Functions of Redoing Activities

The reason for conducting a redoing activity—its epistemic function—has also been studied from a meta-scientific perspective. For example, Matarese (2022) details how changing irrelevant or relevant factors of a study allows for evaluating its reliability and validity. Schmidt (2009) specifically discusses five epistemic functions of replications: controlling for sampling variability, internal validity, and fraud, as well as generalizing results and verifying hypotheses. Bayarri and Mayoral (2002) highlight four goals of a replication: reduction of random error, validation (confirmation) of conclusions, extension of conclusions, and bias detection. Following an analysis of the logical structure of experiments in science, Buzbas et al. (2023) study what can be learned from a sequence of replications, given the information available to the replicators. They highlight the importance of reporting “modelling assumptions, model structure and parameters” (Buzbas et al., 2023, p. 19). Gundersen (2021) analyzes the scientific method to argue that repeating an experiment can increase trust in the correctness of its conclusion, but not in the underlying hypothesis or theory, which requires different experiments. Steiner et al. (2019) have developed a framework that allows for a causal interpretation of replication failures. López-Ibáñez et al. (2021) also consider redoing activities that recreate digital objects like source code and mention that they are unlikely to contain the same faults, thus hinting at their function for fault detection. Clemens (2017) is even more explicit in this regard: Redoing activities that use the reported data set or sample and thus expect “materially the same results” (p. 327) can identify issues with measurement, coding, and data set construction, as well as scientific misconduct. Finally, Martel García (2013), LeBel et al. (2018), and Nuijten et al. (2018) describe reproductions as an early, less resource-intensive part of a multistep approach to evaluating studies. To summarize, the existing literature on the epistemic function of redoing activities focuses primarily on replications but mentions the ability of reproductions to detect faults and the possibility of combining them. The present article further elaborates on that, laying bare the logic and diversity of reproductions and what can be learned from the combination of multiple reproductions.


== Evaluating the Results of Redoing Activities

Existing research also investigated what constitutes "materially the same results" when new data are collected. For example, Patil et al. (2016b) and Stanley and Spence (2014) describe realistic expectations for replications, and Heyard et al. (2025) compiled 27 replication metrics from the literature. Further, Axtell et al. (1996) differentiate three categories of model equivalence in their work on redoing simulation models: numerical identity (i.e., exactly the same numbers), distributional equivalence (same statistical properties; for which Sego et al. (2024) developed the Empirical Characteristic Function Equality Convergence Test), and relational equivalence (same relationships between variables). Similar categories are described by Ivie and Thain (2019). However, a recent need has been formulated for adding another category in case the original work contains insufficient information (Zhang & Robinson, 2021).

In contrast, reproductions have received considerably less attention in that regard. One approach from the field of psychology suggests a 10% rule for comparing the original with the reproduction result (Hardwicke et al., 2018; LeBel et al., 2018). This rule balances rigor and usefulness, but it falls short of accounting for ambiguity in the description of the data analysis. On this matter, Artner et al. (2021) propose to differentiate correctness from vagueness when evaluating the reproducibility of numerical results. Here, _correct results_ can be reproduced without violating the data-analytical descriptions in the study. Further, the reproducibility is _vague_ if the descriptions allow for multiple correct results. This distinction allows putting results into the context of the underlying description. Finally, Dreber and Johannesson (2025) propose two indicators for systematic bias of reproductions: the statistical significance indicator and the relative effect size indicator. The present article establishes a new standard for the consistency of results, which accounts for uncertainty in the model description.

Conceptual work on reproductions has also been paired with practical recommendations, for example, by Ankel-Peters et al. (2024) and Brodeur et al. (2024). The related _Guide for Accelerating Computational Reproducibility in the Social Sciences_ (Berkeley Initiative for Transparency in the Social Sciences, 2020) provides detailed instructions for conducting and reporting reproductions, also covering improvements, tests of a work's robustness, and communication with the original authors. However, it is less formal regarding the comparison of results. The present article fills this gap by systematically discussing reasons for differences in results and deriving criteria for their consistency. Further, the importance of checking the coherence of relevant instructions is highlighted.


== About this Article

Building on the existing research on the epistemic functions of reproductions, the second section of this article ("The Verifying Function of Reproductions") introduces their verifying function and explains what can be learned from their conduct. The third section ("Defining Reproductions") explains their underlying logic and defines central terms around them. Finally, the fourth and fifth sections ("Performing a Reproduction" and "Discussion and Recommenedations") provide practical recommendations on their conduct and reporting and discusses their possible outcomes.

Although this article focuses on the concepts rather than the appropriateness of their labels, we aim to use consistent language. For example, a scientific work that is the target of a reproduction attempt is referred to as the _original work_, its authors as _original authors_, and its results as _original results_. The counterparts to these terms are a reproduction, reproducers, and reproduction result. We suggest avoiding the term "reproduced result" to avoid ambiguity. Also note that the term "reported data" always refers to the data provided by the original authors. Further, we use the terms "mistake" and "fault" according to international standards (International Organization for Standardization, 2017) by distinguishing a human action (a mistake) and its manifestation (a hardware or software fault).

The challenges described initially relate to different issues when verifying existing research:


- _Target selection_ refers to which specific results (out of multiple original results) a redoing activity should focus on.
- _Issues with data and code_ relate to their lack of availability, provenance, correctness, and executability.
- _Evaluation of results_ concerns how original and reproduction results are compared and what the conclusion is.
- _Synthesis of results_ involves integrating and reporting multiple results, both on the level of individual studies and across them.

This article will focus on issues with data and code and the evaluation of results, though it will also touch on the other issues.

= The Verifying Function of Reproductions

In the following section, we describe where mistakes in the research process can occur, which prototypical redoing activities can detect the resulting faults, and how their combination can be insightful. This article considers another instance of uncertainty among research consumers that concerns the existence of faults#footnote[Note that we assume honest actors and always attribute to a mistake rather than fraud—though we don't expect maximal transparency.] within the original work. In the following paragraphs, we focus on three reproduction prototypes as discerned in the literature @plesser2018 that all work with the reported collected data and discuss a replication in comparison:

- Re-executing the original data analysis source code on the original data (“re-execution reproduction”). In the following, it is assumed that the source code is not checked for coherence with the methods section.
- Re-implementing the data analysis source code and running it on the original data (“re-implementation reproduction”).
- Re-executing the reported simulation source code (“re-collection reproduction”), in the case of in silico works.
- Collecting new data or, in the case of in silico works, re-implementing the simulation source code (“replication”).

#jote-box(title: [Box 1], width: "wide")[
  *Summary: Logic of Reproductions*

  - *Goal:* A reproduction can have the goal of verifying a computation on collected data. We suggest comparing the original and reproduction results for consistency rather than identity.
  - *Procedure:* Original and reproduction results are compared. If differences are observed, reproducers attempt to systematically explain them.
  - *Obstacles:* Obstacles can prevent reproducers from obtaining a result. These include underspecification and external constraints.
  - *Results:* The reproduction results are consistent with the original results if their difference can be expected given the choices necessitated by obstacles.
]

All four activities represent particular sets of phases that are redone out of all possible phases of a simplified research process, as detailed in @fig:process: data collection, data analysis, and reporting. Here, every phase covered by the colored area of a redoing activity is done again according to the description in the original work.#footnote[By computational environment we refer to the hardware and software setup which is utilized while calculating the results.] In contrast, all remaining phases are directly inherited (i.e., not redone) from the original work.

#wide-figure(
  image("media/figure-1.pdf", width: 100%),
  caption: [Simplified Research Process With Its Possible Phases, Enclosed by Prototypical Redoing Activities and with Associated Reasons for Differences in Results (a) through (k)],
) <fig:process>

== Lists, Quotes and Equations

Numbered lists use bold labels and no extra space between items, just like the class (`enumitem` with `nosep`):

+ Check the coherence of the descriptions.
+ Obtain the collected data (or the simulation source code).
  + from the original authors, or
  + from a public repository.
+ Compare the results.

Quotations are set small, italic and indented on both sides (the `quoting` package):

#quote(block: true)[Although we could exactly reproduce the originally reported numerical result, the support for the claim is weakened because the employed rule of inference is inappropriate.]

#epigraph[Goodman et al. (2016)][Reproducibility has to be defined in terms of what is being reproduced.]

Display equations keep a full line of space above and below:
$ d = (|r_"orig" - r_"repr"|) / max(|r_"orig"|, epsilon) $
where $epsilon > 0$ avoids division by zero, as discussed by @goodman2016.

=== A Subsubsection

Subsubsection headings are italic and are followed directly by the text, without an empty line.

==== Run-in Paragraph
Paragraph headings (`\paragraph`) are set in the text weight and run into the paragraph that follows them, separated by two spaces.

== Tables

Tables are set in `\small`, with booktabs-style rules (`toprule`, `midrule` and `bottomrule` are exported by the template). Captions of tables go above the table, as in @tab:outcomes.

#figure(
  table(
    columns: (auto, 1fr, 1fr),
    toprule,
    table.header[*Activity*][*Comparison*][*Outcome*],
    midrule,
    [Re-execution], [Identity], [Identical],
    [Re-implementation], [Consistency], [Consistent],
    [Re-collection], [Consistency], [Inconsistent],
    [Replication], [Consistency], [Consistent],
    bottomrule,
  ),
  caption: [Prototypical Redoing Activities and Their Comparison],
) <tab:outcomes>

A box can also sit in the text flow at column width:

#jote-box(title: [Box 2])[
  *In-flow box*

  This box is as wide as the column and does not float.
]

Barba (2018) and Plesser (2018) noted that fields differ in how various redoing activities are named @barba2018.

#jote-box(title: [Box 3], width: "full", placement: bottom)[
  *What to Report in a Reproduction*

  - _Reproducers' expertise_
    - Subject-matter (theory and claims)
    - Methods (modeling and computation)
  - _Scope_
    - Works: Report any permanent identifiers of the investigated works.
    - Results: Report which results are being investigated.
  - _Faults:_ Were any faults identified?
]

// filler text to show how floats settle on the following pages
#lorem(350)
