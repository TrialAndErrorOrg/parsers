// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }
declare var Year: any;
declare var Lp: any;
declare var Rp: any;
declare var __: any;
declare var Number: any;
declare var Com: any;
declare var Dot: any;
declare var Sem: any;
declare var Col: any;
declare var Amp: any;
declare var And: any;
declare var Ca: any;
declare var Quote: any;
declare var Apo: any;
declare var Slash: any;
declare var Dash: any;
declare var Punct: any;
declare var Mc: any;
declare var DutchPref: any;
declare var Cap: any;
declare var Lowword: any;
declare var NL: any;
declare var Misc: any;
declare var Et: any;
declare var Low: any;

import {lexer} from './lexer'

const getFullName = (name: {family:string,
                            'non-dropping-particle':string
                           }
                    ) => `${name?.['non-dropping-particle']? name?.['non-dropping-particle']+' ':''}${name.family}`


const locators = [
                            "act",
                            "appendix",
                            "article-locator",
                            "book",
                            "canon",
                            "chapter",
                            "column",
                            "elocation",
                            "equation",
                            "figure",
                            "folio",
                            "issue",
                            "line",
                            "note",
                            "opus",
                            "page",
                            "paragraph",
                            "part",
                            "rule",
                            "scene",
                            "section",
                            "sub-verbo",
                            "supplement",
                            "table",
                            "timestamp",
                            "title-locator",
                            "verse",
                            "version",
                            "volume"
]

const labelMap: {[key:string]:string}= {
  'p': 'page',
  'pp': 'page',
  'chapter': 'chapter',
  'ch': 'chapter',
  'sec': 'section',
  'par': 'paragraph',
  'paras': 'paragraph',
  "vol": 'volume',
  'app':'appendix',
}

interface NearleyToken {
  value: any;
  [key: string]: any;
};

interface NearleyLexer {
  reset: (chunk: string, info: any) => void;
  next: () => NearleyToken | undefined;
  save: () => any;
  formatError: (token: never) => string;
  has: (tokenType: string) => boolean;
};

interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
};

type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
};

const grammar: Grammar = {
  Lexer: lexer,
  ParserRules: [
    {"name": "Input$ebnf$1", "symbols": ["InputContent"]},
    {"name": "Input$ebnf$1", "symbols": ["Input$ebnf$1", "InputContent"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "Input", "symbols": ["Input$ebnf$1"], "postprocess":  (inp: any[])=>{
        const [content] = inp
        return content.reduce((acc: any[],curr: Record<string, any>)=>{
        
              if(!curr.value){
                acc.push(curr)
                return acc
              }
        
              if(typeof acc[acc.length-1] ==='string'){
                acc[acc.length-1]+=curr.value
                return acc
              }
        
              acc.push(curr.value)
              return acc
        
           }  ,[])
        }
                                },
    {"name": "InputContent", "symbols": ["ParenCite"], "postprocess": id},
    {"name": "InputContent", "symbols": ["NarrCite"], "postprocess": id},
    {"name": "InputContent", "symbols": ["NonCiteContent"], "postprocess": id},
    {"name": "NonCiteContent", "symbols": [(lexer.has("Year") ? {type: "Year"} : Year)], "postprocess": id},
    {"name": "NonCiteContent", "symbols": ["NonYearParenContent"], "postprocess": id},
    {"name": "NonCiteContent$ebnf$1", "symbols": ["NonYearParenContent"]},
    {"name": "NonCiteContent$ebnf$1", "symbols": ["NonCiteContent$ebnf$1", "NonYearParenContent"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "NonCiteContent", "symbols": [(lexer.has("Lp") ? {type: "Lp"} : Lp), "NonCiteContent$ebnf$1", (lexer.has("Rp") ? {type: "Rp"} : Rp)], "postprocess": ([l,c,r]) => l+c.join('')+r},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("__") ? {type: "__"} : __)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Number") ? {type: "Number"} : Number)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Com") ? {type: "Com"} : Com)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Dot") ? {type: "Dot"} : Dot)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Sem") ? {type: "Sem"} : Sem)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Col") ? {type: "Col"} : Col)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Amp") ? {type: "Amp"} : Amp)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("And") ? {type: "And"} : And)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Ca") ? {type: "Ca"} : Ca)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Quote") ? {type: "Quote"} : Quote)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Apo") ? {type: "Apo"} : Apo)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Slash") ? {type: "Slash"} : Slash)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Dash") ? {type: "Dash"} : Dash)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Punct") ? {type: "Punct"} : Punct)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Mc") ? {type: "Mc"} : Mc)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("DutchPref") ? {type: "DutchPref"} : DutchPref)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Cap") ? {type: "Cap"} : Cap)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Lowword") ? {type: "Lowword"} : Lowword)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": id},
    {"name": "NonYearParenContent", "symbols": [(lexer.has("Misc") ? {type: "Misc"} : Misc)], "postprocess": id},
    {"name": "NarrCite$ebnf$1", "symbols": ["Loc"], "postprocess": id},
    {"name": "NarrCite$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "NarrCite", "symbols": ["NameList", (lexer.has("__") ? {type: "__"} : __), (lexer.has("Lp") ? {type: "Lp"} : Lp), "YearList", "NarrCite$ebnf$1", (lexer.has("Rp") ? {type: "Rp"} : Rp)], "postprocess":  ([name,,,year])=>(
        {
          citationId: 'CITE-X',
           citationItems: year.map((y:string)=>({
               "id":getFullName(name).replace(/ /g,'')+y
           })),
           properties: {noteIndex: 0,mode: "composite"}
        }
                )
                                                        },
    {"name": "ParenCite", "symbols": [(lexer.has("Lp") ? {type: "Lp"} : Lp), "ParenContent", (lexer.has("Rp") ? {type: "Rp"} : Rp)], "postprocess":  ([,content,])=>{
          // This is CSL-JSON cite items
        return  {
            citationId:"CITE-X",
            citationItems: content.flat(),
            properties: {"noteIndex":0}
          }
        }
                                            },
    {"name": "ParenContent", "symbols": ["SingleParenEntry"], "postprocess": id},
    {"name": "ParenContent", "symbols": ["ParenContent", (lexer.has("Sem") ? {type: "Sem"} : Sem), (lexer.has("__") ? {type: "__"} : __), "SingleParenEntry"], "postprocess": 
        ([content, semi,,single])=> [
          ...(content.flat()),
          ...single
         ]
                                                                      },
    {"name": "ParenContent", "symbols": ["ParenContent", "PreAuthsMiddle", "SingleParenEntry"], "postprocess": 
        ([content, pre,single])=>{
           const sing = single[0]
           sing.prefix = pre.join('')
           return [
             ...(content.flat()),
            sing
             ]
            }
          },
    {"name": "SingleParenEntry$ebnf$1", "symbols": []},
    {"name": "SingleParenEntry$ebnf$1", "symbols": ["SingleParenEntry$ebnf$1", "PreAuthsPre"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "SingleParenEntry$ebnf$2", "symbols": ["Loc"], "postprocess": id},
    {"name": "SingleParenEntry$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "SingleParenEntry", "symbols": ["SingleParenEntry$ebnf$1", "ParenCiteAuthYear", "SingleParenEntry$ebnf$2"], "postprocess": 
        ([pre, cont, loc]) => {
                if(pre.length){
                   cont[0].prefix=pre.join('; ')
                }
                if(loc){
                  cont[0]={...cont[0], ...loc}
                  // cont[0].loc=loc
                }
                return cont
          }
                                                              },
    {"name": "PreAuthsPre$ebnf$1", "symbols": ["GenericContent"]},
    {"name": "PreAuthsPre$ebnf$1", "symbols": ["PreAuthsPre$ebnf$1", "GenericContent"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "PreAuthsPre", "symbols": ["PreAuthsPre$ebnf$1", (lexer.has("Sem") ? {type: "Sem"} : Sem), (lexer.has("__") ? {type: "__"} : __)], "postprocess": 
        content=> {
                    return content[0]
                  }
                                                      },
    {"name": "PreAuthsPre$ebnf$2", "symbols": ["GenericContent"]},
    {"name": "PreAuthsPre$ebnf$2", "symbols": ["PreAuthsPre$ebnf$2", "GenericContent"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "PreAuthsPre", "symbols": ["PreAuthsPre$ebnf$2", (lexer.has("Com") ? {type: "Com"} : Com), (lexer.has("__") ? {type: "__"} : __)], "postprocess": content=> content[0]},
    {"name": "PreAuthsPre$ebnf$3", "symbols": ["GenericContent"]},
    {"name": "PreAuthsPre$ebnf$3", "symbols": ["PreAuthsPre$ebnf$3", "GenericContent"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "PreAuthsPre", "symbols": ["PreAuthsPre$ebnf$3", (lexer.has("__") ? {type: "__"} : __)], "postprocess": content=>content[0]},
    {"name": "PreAuthsMiddle$ebnf$1", "symbols": ["GenericContent"]},
    {"name": "PreAuthsMiddle$ebnf$1", "symbols": ["PreAuthsMiddle$ebnf$1", "GenericContent"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "PreAuthsMiddle", "symbols": [(lexer.has("Sem") ? {type: "Sem"} : Sem), (lexer.has("__") ? {type: "__"} : __), "PreAuthsMiddle$ebnf$1"], "postprocess": 
        content=> {
                    return content[2]
                  }
                                                      },
    {"name": "Loc", "symbols": [(lexer.has("Com") ? {type: "Com"} : Com), (lexer.has("__") ? {type: "__"} : __), "LocContent"], "postprocess": ([,,loc])=>loc},
    {"name": "LocContent$ebnf$1", "symbols": ["GenericContent"]},
    {"name": "LocContent$ebnf$1", "symbols": ["LocContent$ebnf$1", "GenericContent"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "LocContent$ebnf$2", "symbols": ["GenericContent"]},
    {"name": "LocContent$ebnf$2", "symbols": ["LocContent$ebnf$2", "GenericContent"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "LocContent", "symbols": ["LocContent$ebnf$1", (lexer.has("__") ? {type: "__"} : __), "LocContent$ebnf$2"], "postprocess":  ([label,space,loc]) => {
        
                    const rawLabel=label.join('').trim().toLowerCase().replace(/\./g,'')
        
                    if(!(labelMap[rawLabel]) && !locators.includes(rawLabel)){
                      return {label:'none', locator: label.join('')+space+loc.join('')}
                    }
        
                    const properLabel = labelMap[rawLabel] || rawLabel
        
                   return {
                     label: properLabel,
                     locator: loc.join('').trim()
                    }
        }
                                                            },
    {"name": "LocContent$ebnf$3", "symbols": ["GenericContent"]},
    {"name": "LocContent$ebnf$3", "symbols": ["LocContent$ebnf$3", "GenericContent"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "LocContent", "symbols": ["LocContent$ebnf$3"], "postprocess": ([loc]) => ({locator: loc.join(''),label:'none'})},
    {"name": "GenericContent", "symbols": [(lexer.has("Lowword") ? {type: "Lowword"} : Lowword)], "postprocess": id},
    {"name": "GenericContent$ebnf$1", "symbols": [(lexer.has("Cap") ? {type: "Cap"} : Cap)]},
    {"name": "GenericContent$ebnf$1", "symbols": ["GenericContent$ebnf$1", (lexer.has("Cap") ? {type: "Cap"} : Cap)], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "GenericContent", "symbols": [(lexer.has("Cap") ? {type: "Cap"} : Cap), "GenericContent$ebnf$1"], "postprocess": ([cap,caps]) => cap+caps.join('')},
    {"name": "GenericContent", "symbols": [(lexer.has("Cap") ? {type: "Cap"} : Cap), (lexer.has("__") ? {type: "__"} : __)], "postprocess": content=>content.join('')},
    {"name": "GenericContent", "symbols": [(lexer.has("Cap") ? {type: "Cap"} : Cap), (lexer.has("Lowword") ? {type: "Lowword"} : Lowword)], "postprocess": content=>content.join('')},
    {"name": "GenericContent$ebnf$2$subexpression$1", "symbols": [(lexer.has("Cap") ? {type: "Cap"} : Cap), (lexer.has("Dot") ? {type: "Dot"} : Dot)]},
    {"name": "GenericContent$ebnf$2", "symbols": ["GenericContent$ebnf$2$subexpression$1"]},
    {"name": "GenericContent$ebnf$2$subexpression$2", "symbols": [(lexer.has("Cap") ? {type: "Cap"} : Cap), (lexer.has("Dot") ? {type: "Dot"} : Dot)]},
    {"name": "GenericContent$ebnf$2", "symbols": ["GenericContent$ebnf$2", "GenericContent$ebnf$2$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "GenericContent", "symbols": [(lexer.has("Cap") ? {type: "Cap"} : Cap), (lexer.has("Dot") ? {type: "Dot"} : Dot), "GenericContent$ebnf$2"], "postprocess": ([c,d,content])=>c+d+content.flat().join('')},
    {"name": "GenericContent", "symbols": [(lexer.has("Col") ? {type: "Col"} : Col)], "postprocess": id},
    {"name": "GenericContent", "symbols": [(lexer.has("Number") ? {type: "Number"} : Number)], "postprocess": id},
    {"name": "GenericContent", "symbols": [(lexer.has("Dot") ? {type: "Dot"} : Dot)], "postprocess": id},
    {"name": "GenericContent", "symbols": [(lexer.has("Dash") ? {type: "Dash"} : Dash)], "postprocess": id},
    {"name": "GenericContent", "symbols": [(lexer.has("Com") ? {type: "Com"} : Com)], "postprocess": id},
    {"name": "GenericContent", "symbols": [(lexer.has("__") ? {type: "__"} : __)], "postprocess": id},
    {"name": "ParenCiteAuthYear", "symbols": ["ParenNameMaybeList", (lexer.has("Com") ? {type: "Com"} : Com), (lexer.has("__") ? {type: "__"} : __), "YearList"], "postprocess":  ([name,,,year]) => {
          return year.map((y:string)=>({
              "id":getFullName(name).replace(/ /g,'')+y
          }))
        }
                                                          },
    {"name": "YearList", "symbols": ["Year"], "postprocess": year=>[year]},
    {"name": "YearList$ebnf$1", "symbols": [(lexer.has("__") ? {type: "__"} : __)]},
    {"name": "YearList$ebnf$1", "symbols": ["YearList$ebnf$1", (lexer.has("__") ? {type: "__"} : __)], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "YearList", "symbols": ["YearList", (lexer.has("Com") ? {type: "Com"} : Com), "YearList$ebnf$1", "Year"], "postprocess":  ([list,,,year])=> {
           return [...list,year]
        }
                                              },
    {"name": "NameList", "symbols": ["Name"], "postprocess": id},
    {"name": "NameList", "symbols": ["NameList", (lexer.has("Com") ? {type: "Com"} : Com), (lexer.has("__") ? {type: "__"} : __), "Name"], "postprocess": name=>name[0]},
    {"name": "NameList", "symbols": ["NameList", (lexer.has("Com") ? {type: "Com"} : Com), (lexer.has("__") ? {type: "__"} : __), "NameList"], "postprocess": name=>name[0]},
    {"name": "NameList", "symbols": ["NameList", (lexer.has("Com") ? {type: "Com"} : Com), (lexer.has("__") ? {type: "__"} : __), "Comp", (lexer.has("__") ? {type: "__"} : __), "NameList"], "postprocess": name=>name[0]},
    {"name": "NameList", "symbols": ["NameList", (lexer.has("Com") ? {type: "Com"} : Com), (lexer.has("__") ? {type: "__"} : __), "Comp", (lexer.has("__") ? {type: "__"} : __)], "postprocess": name=>name[0]},
    {"name": "NameList", "symbols": ["NameList", (lexer.has("__") ? {type: "__"} : __), "Comp", (lexer.has("__") ? {type: "__"} : __), "NameList"], "postprocess": name=>name[0]},
    {"name": "NameList", "symbols": ["NameList", (lexer.has("__") ? {type: "__"} : __), "Comp", (lexer.has("__") ? {type: "__"} : __)], "postprocess": name=>name[0]},
    {"name": "NameList", "symbols": ["NameList", (lexer.has("Com") ? {type: "Com"} : Com), (lexer.has("__") ? {type: "__"} : __), "Etal"], "postprocess": name=>name[0]},
    {"name": "NameList", "symbols": ["NameList", "Etal"], "postprocess": name=>name[0]},
    {"name": "ParenNameMaybeList", "symbols": ["ParenNameMaybe"], "postprocess": id},
    {"name": "ParenNameMaybeList", "symbols": ["ParenNameMaybeList", (lexer.has("Com") ? {type: "Com"} : Com), (lexer.has("__") ? {type: "__"} : __), "Name"], "postprocess": name=>name[0]},
    {"name": "ParenNameMaybeList", "symbols": ["ParenNameMaybeList", (lexer.has("Com") ? {type: "Com"} : Com), (lexer.has("__") ? {type: "__"} : __), "NameList"], "postprocess": name=>name[0]},
    {"name": "ParenNameMaybeList", "symbols": ["ParenNameMaybeList", (lexer.has("Com") ? {type: "Com"} : Com), (lexer.has("__") ? {type: "__"} : __), "Comp", (lexer.has("__") ? {type: "__"} : __), "NameList"], "postprocess": name=>name[0]},
    {"name": "ParenNameMaybeList", "symbols": ["ParenNameMaybeList", (lexer.has("Com") ? {type: "Com"} : Com), (lexer.has("__") ? {type: "__"} : __), "Comp", (lexer.has("__") ? {type: "__"} : __)], "postprocess": name=>name[0]},
    {"name": "ParenNameMaybeList", "symbols": ["ParenNameMaybeList", (lexer.has("__") ? {type: "__"} : __), "Comp", (lexer.has("__") ? {type: "__"} : __), "NameList"], "postprocess": name=>name[0]},
    {"name": "ParenNameMaybeList", "symbols": ["ParenNameMaybeList", (lexer.has("__") ? {type: "__"} : __), "Comp", (lexer.has("__") ? {type: "__"} : __)], "postprocess": name=>name[0]},
    {"name": "ParenNameMaybeList", "symbols": ["ParenNameMaybeList", (lexer.has("__") ? {type: "__"} : __), "Etal"], "postprocess": name=>name[0]},
    {"name": "ParenNameMaybe", "symbols": ["Name"], "postprocess": id},
    {"name": "ParenNameMaybe", "symbols": ["ParenNameMaybe", (lexer.has("__") ? {type: "__"} : __), "ParenNameMaybe"], "postprocess": ([n,,nn]) => ({family:n.family+nn.family})},
    {"name": "ParenNameMaybe", "symbols": ["ParenNameMaybe", (lexer.has("__") ? {type: "__"} : __), (lexer.has("Lowword") ? {type: "Lowword"} : Lowword)], "postprocess": ([n,,nn]) => ({family:n.family+nn})},
    {"name": "Etal$ebnf$1", "symbols": [(lexer.has("__") ? {type: "__"} : __)], "postprocess": id},
    {"name": "Etal$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Etal", "symbols": ["Etal$ebnf$1", (lexer.has("Et") ? {type: "Et"} : Et)], "postprocess": etal=>null},
    {"name": "Name", "symbols": ["Initials", (lexer.has("__") ? {type: "__"} : __), "LastName"], "postprocess": name=> name[2]},
    {"name": "Name", "symbols": ["LastName"], "postprocess": id},
    {"name": "LastName", "symbols": ["SingleName"], "postprocess": id},
    {"name": "LastName", "symbols": ["HyphenName"], "postprocess": id},
    {"name": "Comp", "symbols": [(lexer.has("And") ? {type: "And"} : And)], "postprocess": id},
    {"name": "Comp", "symbols": [(lexer.has("Amp") ? {type: "Amp"} : Amp)], "postprocess": id},
    {"name": "HyphenName", "symbols": ["SingleName", (lexer.has("Dash") ? {type: "Dash"} : Dash), "SingleName"], "postprocess": ([first,d,last])=>({family: `${getFullName(first)+d+getFullName(last)}`})},
    {"name": "SingleName", "symbols": ["BoringNameMaybe"], "postprocess": ([name]) => ({family:name})},
    {"name": "SingleName", "symbols": ["DutchName"], "postprocess": id},
    {"name": "SingleName", "symbols": ["OReilly"], "postprocess": id},
    {"name": "SingleName", "symbols": ["McConnel"], "postprocess": id},
    {"name": "Initials", "symbols": ["Initial"]},
    {"name": "Initials$ebnf$1", "symbols": []},
    {"name": "Initials$ebnf$1", "symbols": ["Initials$ebnf$1", (lexer.has("__") ? {type: "__"} : __)], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "Initials", "symbols": ["Initials", "Initials$ebnf$1", "Initial"]},
    {"name": "Initial", "symbols": [(lexer.has("Cap") ? {type: "Cap"} : Cap), (lexer.has("Dot") ? {type: "Dot"} : Dot)], "postprocess": id},
    {"name": "DutchName", "symbols": ["DutchPrefix", (lexer.has("__") ? {type: "__"} : __), "BoringNameMaybe"], "postprocess": ([pref,space, rest]) =>({family: rest, 'non-dropping-particle': pref.join('')})},
    {"name": "OReilly", "symbols": ["BoringNameMaybe", {"literal":"'"}, "BoringNameMaybe"], "postprocess": ([o, a, name]) =>({family:o+a+name })},
    {"name": "McConnel", "symbols": [(lexer.has("Mc") ? {type: "Mc"} : Mc), "BoringNameMaybe"], "postprocess": (name) =>({family:name.join('')})},
    {"name": "BoringNameMaybe$ebnf$1", "symbols": []},
    {"name": "BoringNameMaybe$ebnf$1", "symbols": ["BoringNameMaybe$ebnf$1", (lexer.has("Lowword") ? {type: "Lowword"} : Lowword)], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "BoringNameMaybe", "symbols": [(lexer.has("Cap") ? {type: "Cap"} : Cap), "BoringNameMaybe$ebnf$1"], "postprocess": ([cap, rest]) =>( `${cap}${rest.join('')}`)},
    {"name": "BoringWord$ebnf$1", "symbols": [(lexer.has("Low") ? {type: "Low"} : Low)]},
    {"name": "BoringWord$ebnf$1", "symbols": ["BoringWord$ebnf$1", (lexer.has("Low") ? {type: "Low"} : Low)], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "BoringWord", "symbols": ["BoringWord$ebnf$1"], "postprocess": (word) =>(word.join(''))},
    {"name": "DutchPrefix", "symbols": [(lexer.has("DutchPref") ? {type: "DutchPref"} : DutchPref)]},
    {"name": "DutchPrefix", "symbols": ["DutchPrefix", (lexer.has("__") ? {type: "__"} : __), (lexer.has("DutchPref") ? {type: "DutchPref"} : DutchPref)]},
    {"name": "Year", "symbols": [(lexer.has("Year") ? {type: "Year"} : Year)], "postprocess": ([year]) => `${year}`.replace(/\./g,'').toUpperCase()},
    {"name": "Year", "symbols": ["Year", (lexer.has("Slash") ? {type: "Slash"} : Slash), "Year"], "postprocess":  ([year, sl, year2]) => year2
                                     },
    {"name": "Year$ebnf$1", "symbols": [(lexer.has("Dash") ? {type: "Dash"} : Dash)], "postprocess": id},
    {"name": "Year$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "Year", "symbols": ["Year", "Year$ebnf$1", (lexer.has("Lowword") ? {type: "Lowword"} : Lowword)], "postprocess": ([year,, low])=> year + low}
  ],
  ParserStart: "Input",
};

export default grammar;
