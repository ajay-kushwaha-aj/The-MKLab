import manjariPhoto from "../assets/manjari-kiran.jpg";
import heroRnaVisual from "../assets/hero-rna.jpg";
import labLogo from "../assets/home/mklab-logo.png";
import uohLogo from "../assets/home/uoh-logo.png";
import group2025 from "../assets/home/group-2025.jpg";
import group2024 from "../assets/home/group-2024.jpg";
import group2023Lab from "../assets/home/group-2023-lab.jpg";
import group2023 from "../assets/home/group-2023.jpg";
import group2022 from "../assets/home/group-2022.jpg";
import group2021 from "../assets/home/group-2021.jpg";
import group2020 from "../assets/home/group-2020.jpg";
import manjariTeamPhoto from "../assets/team/manjari-kiran-team.jpg";
import smoke1 from "../assets/team/smoke-1.jpg";
import smoke2 from "../assets/team/smoke-2.png";
import smoke3 from "../assets/team/smoke-3.jpg";
import smoke4 from "../assets/team/smoke-4.jpg";
import smoke5 from "../assets/team/smoke-5.jpg";
import smoke6 from "../assets/team/smoke-6.jpg";
import amardeepPhoto from "../assets/team/amardeep-lokhande.jpg";
import shirsanyaPhoto from "../assets/team/shirsanya-roy.jpg";
import neelimaPhoto from "../assets/team/neelima-kondapalli.jpg";
import sravanPhoto from "../assets/team/sravan.jpg";
import ananyaPhoto from "../assets/team/sai-ananya-pavani.jpg";
import ayushPhoto from "../assets/team/ayush.png";
import snigdhaPhoto from "../assets/team/snigdha-jha.jpg";
import apoorvaPhoto from "../assets/team/apoorva.png";
import shamamaPhoto from "../assets/team/syeda-shamama-shahnawaz.png";
import anubhaPhoto from "../assets/team/anubha-dey.jpg";
import fathimaPhoto from "../assets/team/fathima-zahara.jpg";
import pallabiPhoto from "../assets/team/pallabi-shaw.jpg";
import kirthanaPhoto from "../assets/team/kirthana-viswanathan.jpg";
import ajmalPhoto from "../assets/team/ajmal.jpg";
import mavikaPhoto from "../assets/team/mavika.png";
import shrithikaPhoto from "../assets/team/shrithika.png";
import suvanPhoto from "../assets/team/suvan-rj.jpg";
import vaishnaviPhoto from "../assets/team/vaishnavi-tata.jpg";
import kamalikaPhoto from "../assets/team/kamalika.jpg";
import nidhiPhoto from "../assets/team/nidhi.png";
import arshiaPhoto from "../assets/team/arshia.png";

export const ASSETS = {
  manjariPhoto,
  manjariTeamPhoto,
  heroRnaVisual,
  labLogo,
  uohLogo,
};

export const MKLAB_DATA = {
  site: {
    name: "The MKLab",
    subtitle: "Computational RNA Biology · University of Hyderabad",
    tagline:
      "Using systems-level and integrative approaches, we are computational biologists driven by a deep interest in unraveling the regulatory complexity of non-coding RNAs (ncRNAs) in human health and disease.",
    pi: "Dr. Manjari Kiran",
    room: "Room no: F75A, School of Life Sciences",
    department: "Department of Systems and Computational Biology",
    institution: "University of Hyderabad, Gachibowli",
    institutionUrl: "https://uohyd.ac.in/",
    email: "manjari.hcu@uohyd.ac.in",
    phoneLab: "04023134720",
    phoneCV: "+91-40-2313-4564",
    social: {
      x: "https://x.com/manjkira564",
      linkedin: "https://www.linkedin.com/in/manjarikiran/",
      scholar: "https://scholar.google.com/citations?user=KBmsOl8AAAAJ&hl=en",
      github: "https://github.com/MKLABcoder",
      cvPdf: "https://drive.google.com/file/d/1MgCqtsQxmnEunUr7qS_N0k1CjVQP1Z9t/preview",
    },
    developerCredit: {
      prefix: "Designed and developed by",
      name: "Ajay Kushwaha",
      url: "https://www.ajaykushwaha.me/",
    },
  },

  researchThemes: [
    {
      id: "theme-1",
      index: "01",
      title: "Basic Biology of Long Non-Coding RNAs",
      summary:
        "We have reported how inefficient splicing contributes to the transcriptional complexity of lncRNAs (Basu et al, RNA Biology, 2023). Our research investigates whether lncRNAs can encode microproteins and identifies the splicing events and RNA modifications enriched in such cases.",
      keywords: ["Inefficient Splicing", "Transcript Complexity", "lncRNA-Encoded Microproteins", "CaTCH"],
      citation: "Basu et al., RNA Biology, 2023",
    },
    {
      id: "theme-2",
      index: "02",
      title: "Gene Regulation by Non-Coding RNAs",
      summary:
        "We study how different classes of ncRNAs regulate gene expression. This includes the intriguing spatial pairing of lncRNAs with nearby protein-coding genes (PCGs) and how proximity may drive transcriptional activity. We also investigate enhancer-transcribed RNAs (eRNAs) for their roles in transcriptional condensate formation and super enhancer-derived lncRNAs (SE-lncRNAs) for global gene expression reprogramming in disease contexts.",
      keywords: ["Spatial lncRNA–PCG Pairing", "Enhancer RNAs (eRNAs)", "Transcriptional Condensates", "SE-lncRNAs"],
      citation: "Bond et al., Genome Research, 2023; Viswanathan et al., BBA-GRM, 2026",
    },
    {
      id: "theme-3",
      index: "03",
      title: "Epitranscriptomics in RNA Function",
      summary:
        "Our lab delves into the role of RNA modifications in regulating ncRNA function, particularly in eRNA-mediated condensate formation and lncRNA translation into microproteins. We are actively working to identify unknown RNA modifiers, especially erasers for reversible modifications those may have critical regulatory roles in disease.",
      keywords: ["RNA Modifications", "Writers, Erasers & Readers", "Pseudouridine", "Microprotein Translation"],
      citation: "ASPIRE (CSIR) & IYBF (DBT) Funded",
    },
    {
      id: "theme-4",
      index: "04",
      title: "Tool and Database Development",
      summary:
        "As a computational lab, we create innovative tools and machine-learning frameworks to facilitate biological discovery across cancer genomics, single-cell RNA-seq, survival analysis, and transcript complexity.",
      keywords: ["MAGICAL", "MAGICALDB", "scRNA-seq", "UVA8 & DAS", "CATCH", "PROMISE"],
      citation: "Dey et al., PLoS Comp Biol, 2024; Basu et al., MethodX, 2024",
      tools: [
        { name: "MAGICAL", desc: "Predicts genetic interactions in cancer (Dey et al, 2024 PLOS Comp Bio)", tag: "ML Classifier" },
        { name: "MAGICALDB", desc: "Hosts known and predicted genetic interactions", tag: "Database" },
        { name: "Single-Cell RNA-seq Pipeline", desc: "Utilizing single-cell RNASeq to identify tumorigenic cell types", tag: "scRNA-seq" },
        {
          name: "UVA8 & DAS Prognostic Models",
          desc: "Development of prognostic models, e.g., UVA8 for gliomas (Kiran et al, 2018, Molecular Neurobiology) and DAS for gynecological cancers (Mavika et al, 2025, International Journal Clinical Oncology)",
          tag: "Clinical Models",
        },
        { name: "CATCH", desc: "Calculates transcript complexity of a gene (Basu et al, 2024, MethodX)", tag: "Software Tool" },
        { name: "PROMISE", desc: "Performs survival analysis for a combination of genes", tag: "Survival Tool" },
      ],
    },
  ],

  publications: [
    {
      num: 32, year: 2026, inst: "UoH", corresponding: true,
      authors: "Kirthana Viswanathan, Pallabi Shaw, Manjari Kiran",
      title: "Mechanistic insights into the transcription-mediated roles of non-coding RNAs in gene regulation",
      journal: "Biochimica et Biophysica Acta (BBA) - Gene Regulatory Mechanisms, 1869(4), 195169",
      refLabel: "PMID: 42607885",
      url: "https://doi.org/10.1016/j.bbagrm.2026.195169",
    },
    {
      num: 31, year: 2026, inst: "UoH", corresponding: false,
      authors: "Md Zainul Ali, Manjari Kiran, Pankaj Singh Dholaniya",
      title: "Identification of genes associated with smell dysfunction in Parkinson’s disease",
      journal: "Clinical Parkinsonism & Related Disorders, 14, 100453",
      refLabel: "PMID: 42255497",
      url: "https://doi.org/10.1016/j.prdoa.2026.100453",
    },
    {
      num: 30, year: 2026, inst: "UoH", corresponding: false,
      authors: "Jitesh Gupta, Ravi Ranjan Kumar, Mayank Bajaj, Darshan C Panchariya, Amardeep B Lokhande, Pranay Ammula, Bhavana A Krishnan, Sreeja Sarva, Manjari Kiran, Aparoy Polamarasetty, Roy Karnati*",
      title: "Analysis of infection-associated gene expression and their interaction with differentially expressed miRNA from the prospective of polymicrobial infections in corneal keratitis",
      journal: "Indian Journal of Biochemistry and Biophysics, 63(4), 469-482",
      refLabel: "DOI: 10.56042/ijbb.v63i4.24589",
      url: "https://doi.org/10.56042/ijbb.v63i4.24589",
    },
    {
      num: 29, year: 2026, inst: "UoH", corresponding: true,
      authors: "Kondapally Mavika, Anubha Dey, Golagana Velangani Harshitha, Kiran Shashi, Kiran Manjari",
      title: "Deubiquitinases as prognostic biomarker and potential drug target for gynecological cancers",
      journal: "International Journal of Clinical Oncology, 10.1007/s10147-025-02880-5",
      refLabel: "PMID: 41201663",
      url: "https://link.springer.com/article/10.1007/s10147-025-02880-5",
    },
    {
      num: 28, year: 2025, inst: "UoH", corresponding: false,
      authors: "Vasudevarao Penugurti, Oindrilla Dey, Sruchytha Kalali, Deepak Kumar Kashyap, Saratchandra Singh Khumukcham, Ajnas Kizhuvedath, Sarthak Satpathy, Kiran Manjari, Anupama Row, Tarakeswari Surapaneni, Bramanandam Manavathi*",
      title: "Potential role of Hematopoietic PBX-Interacting Protein (HPIP) in trophoblast fusion and invasion: Implications in pre-eclampsia pathogenesis",
      journal: "Cellular Signalling, 111633",
      refLabel: "PMID: 39884641",
      url: "https://www.sciencedirect.com/science/article/pii/S0898656825000464?via%3Dihub",
    },
    {
      num: 27, year: 2024, inst: "UoH", corresponding: true,
      authors: "Dey Anubha, Mudunuri Suresh, Kiran, Manjari*",
      title: "MAGICAL: A multi-class classifier to predict synthetic lethal and viable interactions using protein-protein interaction network",
      journal: "PLoS Computational Biology, 20(8), e1012336",
      refLabel: "PMID: 39186799",
      url: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1012336",
    },
    {
      num: 26, year: 2024, inst: "UoH", corresponding: false,
      authors: "Davis Eric S, Parker Sarah M, Kramer Nicole E, Flores JP, Kiran Manjari, Phanstiel Douglas H",
      title: "mariner: Explore the Hi-Cs",
      journal: "Bioinformatics, 2024, btae352",
      refLabel: "PMID: 38814811",
      url: "https://academic.oup.com/bioinformatics/article/40/6/btae352/7685386",
    },
    {
      num: 25, year: 2024, inst: "UoH", corresponding: true,
      authors: "Basu Koushiki, Dey Anubha, Kiran, Manjari*",
      title: "CaTCH: Calculating transcript complexity of human genes",
      journal: "MethodX, 12, 102697",
      refLabel: "PMID: 38638454",
      url: "https://www.sciencedirect.com/science/article/pii/S2215016124001511?via%3Dihub",
    },
    {
      num: 24, year: 2023, inst: "UoH", corresponding: true,
      authors: "Basu Koushiki, Dey Anubha, Kiran, Manjari*",
      title: "Inefficient splicing of long non-coding RNAs is associated with higher transcript complexity",
      journal: "RNA Biology, 20(1), 563-572",
      refLabel: "PMID: 37543950",
      url: "https://www.tandfonline.com/doi/10.1080/15476286.2023.2242649?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed#abstract",
    },
    {
      num: 23, year: 2023, inst: "UoH", corresponding: false,
      authors: "Bond Marielle L., Davis Eric S., Quiroga Ivana Y., Dey Anubha., Kiran Manjari., Love Michael I., Won Hyejung., Phanstiel Douglas H.",
      title: "Chromatin loop dynamics during cellular differentiation are associated with changes to both anchor and internal regulatory features",
      journal: "Genome Research, 33(8), 1258-1268",
      refLabel: "PMID: 37699658",
      url: "https://genome.cshlp.org/content/33/8/1258.long",
    },
    {
      num: 22, year: 2023, inst: "UoH", corresponding: false,
      authors: "Chandramohan, Nithya., Kiran, Manjari., Nagarajaram, Hampapathalu Adimurthy.",
      title: "Dissection of hubs and bottlenecks in a protein-protein interaction network",
      journal: "Computational Biology and Chemistry, 102, 107802",
      refLabel: "PMID: 36603332",
      url: "https://www.sciencedirect.com/science/article/pii/S1476927122001827?via%3Dihub",
    },
    {
      num: 21, year: 2021, inst: "UoH", corresponding: false,
      authors: "Namwanje, Maria., Bisunke, Bijay., Rousselle, Thomas V., Lamanilao, Gene G., Sunder, Venkatadri S., Patterson, Elizabeth C., Kuscu, Canan., Kuscu, Cem., Maluf, Daniel., Kiran, Manjari.",
      title: "Rapamycin Alternatively Modifies Mitochondrial Dynamics in Dendritic Cells to Reduce Kidney Ischemic Reperfusion Injury",
      journal: "International Journal of Molecular Sciences, MDPI, 22(10), 5386",
      refLabel: "PMID: 34065421",
      url: "https://www.mdpi.com/1422-0067/22/10/5386",
    },
    {
      num: 20, year: 2021, inst: "UoH", corresponding: false,
      authors: "Kuscu, Canan., Kiran, Manjari., Mohammed, Akram., Kuscu, Cem., Satpathy, Sarthak., Wolen, Aaron., Bardhi, Elissa., Bajwa, Amandeep., Eason, James D., Maluf, Daniel.",
      title: "Integrative Analyses of Circulating Small RNAs and Kidney Graft Transcriptome in Transplant Glomerulopathy",
      journal: "International Journal of Molecular Sciences, MDPI, 22(12), 6218",
      refLabel: "PMID: 34207555",
      url: "https://www.mdpi.com/1422-0067/22/12/6218",
    },
    {
      num: 19, year: 2020, inst: "UVA", corresponding: false,
      authors: "Saha, Shekhar., Kiran, Manjari., Kuscu, Canan., Chatrath, Ajay., Wotton, David., Mayo, Marty W., Dutta, Anindya.",
      title: "Long noncoding RNA DRAIC inhibits prostate cancer progression by interacting with IKK to inhibit NF-κB activation",
      journal: "Cancer Research, American Association for Cancer Research, 80(5), 950-963",
      refLabel: "PMID: 31900260",
      url: "https://aacrjournals.org/cancerres/article/80/5/950/647666/Long-Noncoding-RNA-DRAIC-Inhibits-Prostate-Cancer",
    },
    {
      num: 18, year: 2020, inst: "UoH", corresponding: false,
      authors: "Chatrath, Ajay., Przanowska, Roza., Kiran, Shashi., Su, Zhangli., Saha, Shekhar., Wilson, Briana., Tsunematsu, Takaaki., Ahn, Ji-Hye., Lee, Kyung Yong., Paulsen, Teressa.",
      title: "The pan-cancer landscape of prognostic germline variants in 10,582 patients",
      journal: "Genome Medicine, BioMed Central, 12(1), 1-18",
      refLabel: "PMID: 32066500",
      url: "https://link.springer.com/article/10.1186/s13073-020-0718-7",
    },
    {
      num: 17, year: 2020, inst: "UoH", corresponding: false,
      authors: "Kiran, Shashi., Kiran, Manjari., Ramakrishna, Gayatri.",
      title: "Sirtuin 7 Promotes Mesenchymal to Epithelial Transition by β-Catenin Redistribution and Stabilization",
      journal: "Frontiers in Oncology, Frontiers, 10, 740",
      refLabel: "PMID: 32656073",
      url: "https://www.frontiersin.org/journals/oncology/articles/10.3389/fonc.2020.00740/full",
    },
    {
      num: 16, year: 2020, inst: "UoH", corresponding: false,
      authors: "Chakrabarti, Sankha S., Sunder, Venkatadri S., Kaur, Upinder., Bala, Sapna., Sharma, Priyanka., Kiran, Manjari., Rawal, Ravindra K., Chakrabarti, Sasanka.",
      title: "Identifying the mechanisms of α-synuclein-mediated cytotoxicity in Parkinson’s disease: new insights from a bioinformatics-based approach",
      journal: "Future Neurology, Future Medicine Ltd London, UK, 15(3), FNL49",
      refLabel: "Publisher Link",
      url: "https://www.tandfonline.com/doi/full/10.2217/fnl-2020-0007",
    },
    {
      num: 15, year: 2020, inst: "UoH", corresponding: false,
      authors: "Kuscu, C., Kiran, M., Wolen, A., Kuscu, C., Bajwa, A., Eason, J., Maluf, D., Akalin, E., Mas, V.",
      title: "Transcriptomic Profiling of Paired Serum and Biopsy Samples from FSGS Patients",
      journal: "American Journal Of Transplantation, Wiley, 20, 643-643",
      refLabel: "No External Link",
      url: "",
    },
    {
      num: 14, year: 2020, inst: "UoH", corresponding: false,
      authors: "Lande, Kashmiri., Gupta, Jitesh., Ranjan, Ravi., Kiran, Manjari., Torres Solis, Luis Fernando., Solís Herrera, Arturo., Aliev, Gjumrakch., Karnati, Roy.",
      title: "Exosomes: insights from retinoblastoma and other eye cancers",
      journal: "International Journal of Molecular Sciences, MDPI, 21(19), 7055",
      refLabel: "PMID: 32992741",
      url: "https://www.mdpi.com/1422-0067/21/19/7055",
    },
    {
      num: 13, year: 2019, inst: "UVA", corresponding: false,
      authors: "Kiran, Manjari., Chatrath, Ajay., Tang, Xiwei., Keenan, Daniel Macrae., Dutta, Anindya.",
      title: "A prognostic signature for lower grade gliomas based on expression of long non-coding RNAs",
      journal: "Molecular Neurobiology, Springer US, 56(7), 4786-4798",
      refLabel: "PMID: 30392137",
      url: "https://link.springer.com/article/10.1007/s12035-018-1416-y",
    },
    {
      num: 12, year: 2019, inst: "UVA", corresponding: false,
      authors: "Chatrath, Ajay., Kiran, Manjari., Kumar, Pankaj., Ratan, Aakrosh., Dutta, Anindya.",
      title: "The germline variants rs61757955 and rs34988193 are predictive of survival in lower grade glioma patients",
      journal: "Molecular Cancer Research, American Association for Cancer Research, 17(5), 1075-1086",
      refLabel: "PMID: 30651372",
      url: "https://aacrjournals.org/mcr/article/17/5/1075/89990/The-Germline-Variants-rs61757955-and-rs34988193",
    },
    {
      num: 11, year: 2018, inst: "UVA", corresponding: false,
      authors: "Kuscu, Canan., Kumar, Pankaj., Kiran, Manjari., Su, Zhangli., Malik, Asrar., Dutta, Anindya.",
      title: "tRNA fragments (tRFs) guide Ago to regulate gene expression post-transcriptionally in a Dicer-independent manner",
      journal: "RNA, Cold Spring Harbor Lab, 24(8), 1093-1105",
      refLabel: "PMID: 29844106",
      url: "https://rnajournal.cshlp.org/content/24/8/1093.long",
    },
    {
      num: 10, year: 2018, inst: "UVA", corresponding: false,
      authors: "Reon, Brian J., Karia, Bruno Takao Real., Kiran, Manjari., Dutta, Anindya.",
      title: "LINC00152 promotes invasion through a 3ʹ-hairpin structure and associates with prognosis in glioblastoma",
      journal: "Molecular Cancer Research, American Association for Cancer Research, 16(10), 1470-1482",
      refLabel: "PMID: 29991527",
      url: "https://aacrjournals.org/mcr/article/16/10/1470/89825/LINC00152-Promotes-Invasion-through-a-3-Hairpin",
    },
    {
      num: 9, year: 2018, inst: "UVA", corresponding: false, jointFirst: true,
      authors: "Cichewicz, Magdalena A., Kiran, Manjari., Przanowska, Róża K., Sobierajska, Ewelina., Shibata, Yoshiyuki., Dutta, Anindya.",
      title: "MUNC, an enhancer RNA upstream from the MYOD gene, induces a subgroup of myogenic transcripts in trans independently of MyoD",
      journal: "Molecular and Cellular Biology, American Society for Microbiology, 38(20), e00655-17",
      refLabel: "PMID: 30037979",
      url: "https://www.tandfonline.com/doi/10.1128/MCB.00655-17?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed",
    },
    {
      num: 8, year: 2016, inst: "UVA", corresponding: false,
      authors: "Dutta, Anindya., Kumar, Pankaj., Kiran, Manjari., Kuscu, Canan.",
      title: "Transfer RNA Fragments (tRFs): a Novel Class of Non-micro Short RNAs that Uses Ago1, 3 and 4 to Repress Specific Target RNAs Through 5ʹ Seed Sequences",
      journal: "The FASEB Journal, FASEB, 30, 1054.5-1054.5",
      refLabel: "Publisher Link",
      url: "https://faseb.onlinelibrary.wiley.com/doi/10.1096/fasebj.30.1_supplement.1054.5",
    },
    {
      num: 7, year: 2016, inst: "CDFD", corresponding: false,
      authors: "Kiran, M., Nagarajaram, HA.",
      title: "Interaction and localization diversities of global and local hubs in human protein–protein interaction networks",
      journal: "Molecular BioSystems, Royal Society of Chemistry, 12(9), 2875-2882",
      refLabel: "PMID: 27400769",
      url: "https://pubs.rsc.org/en/content/articlelanding/2016/mb/c6mb00104a",
    },
    {
      num: 6, year: 2016, inst: "UVA", corresponding: false,
      authors: "Shibata, Etsuko., Kiran, Manjari., Shibata, Yoshiyuki., Singh, Samarendra., Kiran, Shashi., Dutta, Anindya.",
      title: "Two subunits of human ORC are dispensable for DNA replication and proliferation",
      journal: "eLife, eLife Sciences Publications Limited, 5, e19084",
      refLabel: "PMID: 27906128",
      url: "https://elifesciences.org/articles/19084",
    },
    {
      num: 5, year: 2015, inst: "CDFD", corresponding: false,
      authors: "Kiran, Shashi., Anwar, Tarique., Kiran, Manjari., Ramakrishna, Gayatri.",
      title: "Sirtuin 7 in cell proliferation, stress and disease: Rise of the Seventh Sirtuin!",
      journal: "Cellular Signalling, Pergamon, 27(3), 673-682",
      refLabel: "PMID: 25435428",
      url: "https://www.sciencedirect.com/science/article/pii/S0898656814003805?via%3Dihub",
    },
    {
      num: 4, year: 2014, inst: "CDFD", corresponding: false,
      authors: "Bashyam, Murali D., Chaudhary, Ajay K., Kiran, Manjari., Nagarajaram, Hampapathalu A., Devi, Radha Rama., Ranganath, Prajnya., Dalal, Ashwin., Bashyam, Leena., Gupta, Neerja., Kabra, Madhulika.",
      title: "Splice, insertion-deletion and nonsense mutations that perturb the phenylalanine hydroxylase transcript cause phenylketonuria in India",
      journal: "Journal of Cellular Biochemistry, 115(3), 566-574",
      refLabel: "PMID: 24130151",
      url: "https://onlinelibrary.wiley.com/doi/10.1002/jcb.24692",
    },
    {
      num: 3, year: 2014, inst: "CDFD", corresponding: false,
      authors: "Bashyam, Murali D., Chaudhary, Ajay K., Kiran, Manjari., Reddy, Venkat., Nagarajaram, Hampapathalu A., Dalal, Ashwin., Bashyam, Leena., Suri, Deepti., Gupta, Anju., Gupta, Neerja.",
      title: "Molecular analyses of novel ASAH1 mutations causing Farber lipogranulomatosis: analyses of exonic splicing enhancer inactivating mutation",
      journal: "Clinical Genetics, Blackwell Publishing Ltd Oxford, UK, 86(6), 530-538",
      refLabel: "PMID: 24355074",
      url: "https://onlinelibrary.wiley.com/doi/10.1111/cge.12316",
    },
    {
      num: 2, year: 2013, inst: "CDFD", corresponding: false,
      authors: "Kiran, Manjari., Nagarajaram, Hampapathalu Adimurthy.",
      title: "Global versus local hubs in human protein–protein interaction network",
      journal: "Journal of Proteome Research, American Chemical Society, 12(12), 5436-5446",
      refLabel: "PMID: 24050456",
      url: "https://pubs.acs.org/doi/full/10.1021/pr4002788",
    },
    {
      num: 1, year: 2012, inst: "CDFD", corresponding: false,
      authors: "Bashyam, Murali D., Chaudhary, Ajay K., Sinha, Manjari., Nagarajaram, HA., Devi, A Radha Rama., Bashyam, Leena., Reddy, E Chandrakanth., Dalal, Ashwin.",
      title: "Molecular genetic analysis of MSUD from India reveals mutations causing altered protein truncation affecting the C-termini of E1α and E1β",
      journal: "Journal of Cellular Biochemistry, Wiley, 113(10), 3122-3132",
      refLabel: "PMID: 22593002",
      url: "https://onlinelibrary.wiley.com/doi/10.1002/jcb.24189",
    },
  ],

  bookChapters: [
    {
      num: 7, year: 2026, fromCV: true,
      authors: "Shirshanya Roy, Sai Ananya Pavani, Kiran Manjari",
      title: "Machine Learning in Variant Calling – from Fundamental Concepts to Rare Mutation Discovery",
      book: "Machine Learning for Molecular Diagnostics and Therapeutics (Springer Nature)",
      refLabel: "2026 CV",
      url: "",
    },
    {
      num: 6, year: 2026, fromCV: true,
      authors: "Pallabi Shaw, Kirthana Viswanathan, Pramod R Somvanshi, Kiran Manjari",
      title: "An R-based Machine Learning Protocol to Predict Diagnostic Biomarkers using RNA-sequencing Data",
      book: "Machine Learning for Molecular Diagnostics and Therapeutics (Springer Nature)",
      refLabel: "2026 CV",
      url: "",
    },
    {
      num: 5, year: 2026, fromCV: true,
      authors: "Amardeep B. Lokhande, Anubha Dey, Kiran Manjari",
      title: "Machine learning approaches for the identification of microproteins and their role as diagnostic markers",
      book: "Machine Learning for Molecular Diagnostics and Therapeutics (Springer Nature)",
      refLabel: "2026 CV",
      url: "",
    },
    {
      num: 4, year: 2025, fromCV: false, corresponding: true,
      authors: "Dey Anubha and Kiran, Manjari*",
      title: "R-based protocols to predict synthetic lethal interactions in cancers using machine-learning tools",
      book: "Artificial Intelligence (AI) in Cell and Genetic Engineering (Springer-Nature)",
      refLabel: "PMID: 40553328",
      url: "https://link.springer.com/protocol/10.1007/978-1-0716-4690-8_5",
    },
    {
      num: 3, year: 2025, fromCV: false, corresponding: true,
      authors: "Dey, Anubha and Kiran, Manjari*",
      title: "Machine learning approaches for the identification of genetic interactions",
      book: "Artificial Intelligence (AI) in Cell and Genetic Engineering (Springer-Nature)",
      refLabel: "PMID: 40553338",
      url: "https://link.springer.com/protocol/10.1007/978-1-0716-4690-8_15",
    },
    {
      num: 2, year: 2024, fromCV: false,
      authors: "Singh, Samayaditya., Kiran, Manjari., and Somvanshi Pramod R.",
      title: "Computational inference of Gene Regulatory Network using genome-wide ChIP-X data",
      book: "Reverse Engineering of Regulatory Networks (Springer-Nature)",
      refLabel: "PMID: 37803124",
      url: "https://link.springer.com/protocol/10.1007/978-1-0716-3461-5_16",
    },
    {
      num: 1, year: 2024, fromCV: false,
      authors: "Nithya Chandramohan, Kiran, Manjari, Hampapathalu Adimurthy Nagarajaram",
      title: "Hubs and Bottlenecks in Protein-Protein interaction networks",
      book: "Reverse Engineering of Regulatory Networks (Springer-Nature)",
      refLabel: "PMID: 37803121",
      url: "https://link.springer.com/protocol/10.1007/978-1-0716-3461-5_13",
    },
  ],

  team: {
    pi: {
      slug: "manjari-kiran",
      name: "Dr. Manjari Kiran",
      role: "Principal Investigator · Assistant Professor",
      initials: "MK",
      focus: "Computational Systems Biology, RNA Biology, Cancer Genomics, Machine Learning",
      photo: manjariTeamPhoto,
      background:
        "I am a computational biologist with a strong interest in uncovering the mechanisms underlying fundamental biological processes and human disease. I completed my doctoral training at the Centre for DNA Fingerprinting and Diagnostics (CDFD), Hyderabad (2009–2014), where my work in network biology led to the identification of a novel dichotomy of hubs in human protein–protein interaction networks. During my postdoctoral training at the University of Virginia, USA (2014–2018), I applied machine learning approaches to develop prognostic signatures for predicting survival outcomes in glioma patients. My research has extensively leveraged both publicly available and in-house generated next-generation sequencing (NGS) data to generate and validate hypotheses across diverse areas of cancer genomics. This includes the identification and functional characterization of novel prognostic long non-coding RNAs (lncRNAs) in cancer. I joined the University of Hyderabad as an Assistant Professor in December 2018, where our research focuses on applying computational approaches to aid cancer diagnosis and improve therapeutic strategies.",
      researchInterests:
        "We investigate the multifaceted roles of lncRNAs in gene regulation, including their involvement in chromatin looping, cis-regulatory mechanisms, biomolecular condensate formation, RNA modifications, microprotein encoding, and alternative splicing. In parallel, my group is also committed to developing user-friendly, publicly accessible computational tools for NGS data analysis, bioinformatics prediction, and the systematic characterization of molecular determinants in human health and disease.",
      funFact: "Outside the lab, I enjoy spending time with kids, exploring creative art projects, experimenting with new recipes, watching movies, or going for a run.",
    },
    mascot: {
      name: "SMOKE",
      role: "Official Lab Mascot",
      initials: "SM",
      photo: smoke1,
      gallery: [smoke1, smoke2, smoke3, smoke4, smoke5, smoke6],
    },
    phd: [
      {
        slug: "amardeep-lokhande",
        name: "Amardeep Lokhande",
        role: "PhD Student (Aug 2021 – present)",
        focus: "Epitranscriptomics",
        initials: "AL",
        photo: amardeepPhoto,
        background:
          "Hello, my name is Amardeep. I completed my M.Sc. in Bioinformatics from Bioinformatics Center SPPU. I have an interest in studying applied parts of life science so I did my PG in Bioinformatics. After that I joined a Ph.D. course in the Department of Systems and Computational Biology when I came to know about this department while working as Project assistant in School of Life Sciences. I met with Dr. Manjari Kiran and expressed my interest in working in the transcriptomics area when I appeared for Ph.D. Entrance for the same University.",
        researchInterests:
          "My PhD work involves finding the function of RNA modifications in RNA translation, splicing, degradation, and localization of lncRNA that have been detected to code for microproteins. I have found the lncRNA that has a physiological role in humans. Most of the work I do in Python and now I learned R for graphics. I trained in using the Linux scripts and their implementation in data handling. I like what I am doing in this research field.",
        funFact:
          "Apart from my work, I like to read news, watch sports Cricket, Tennis. I enjoy running, cooking. I like comedy shows, movies in Marathi, Hindi and watch them when I am free of my work. A fun fact about me is that I like to write my name and its mirror-reflected name with both hands in Marathi.",
      },
      {
        slug: "shirsanya-roy",
        name: "Shirshanya Roy",
        role: "PhD Student (Jan 2022 – present)",
        focus: "Genome regulation",
        initials: "SR",
        photo: shirsanyaPhoto,
        background:
          "Hello, I’m Shirshanya. I did my MSc in Life Sciences from Jawaharlal Nehru University, specialising in molecular cancer genetics. Countless hours of pipetting, cell culture, and PCR later, I decided to switch things up and shift to computational biology. So I joined MKLab in 2021 where I’m currently doing my PhD in computational cancer genomics.",
        researchInterests:
          "My focus is on understanding ‘Super-Enhancers’ (which are these large clusters of putative enhancers which drive cell fate and division), what role they play in healthy and diseased cells, and how they play those roles. I’m especially interested in long non-coding RNA which are transcribed from these regions. My work mostly involves parsing through massive amounts of public NGS data, isolating the signal from the noise, and experimentally validating my findings.",
        funFact:
          "Outside of the lab, I enjoy music, photography, baking, and going on motorcycle rides. I’m also the GM of my own Dungeons & Dragons player group, where I craft rich, lengthy, and sometimes punishing (if my players’ accusations are to be believed) adventures. Fun fact about me: I have a cat. This is a fact and cats are fun, so this counts as a fun fact.",
      },
      {
        slug: "neelima-kondapalli",
        name: "Neelima Kondapalli",
        role: "PhD Student (Jan 2026 – present)",
        focus: "Cancer Genomics",
        initials: "NK",
        photo: neelimaPhoto,
        background:
          "Hi, I'm Neelima. I completed my BSc in biochemistry, botany, and chemistry, and my MSc in biochemistry from Acharya Nagarjuna University. I have recently joined the PhD program in the Department of Systems and Computational Biology at the University of Hyderabad.",
        researchInterests:
          "As a new student, I am interested in learning new research methods and building my skills during my doctoral studies. I look forward to learning and contributing to the academic activities of the department. I like learning new things and improving myself.",
      },
      {
        slug: "sravan",
        name: "Sravan (Nukapangu Sravan Kumar)",
        role: "PhD Student (Jan 2026 – present)",
        focus: "AI in Genomics",
        initials: "SK",
        photo: sravanPhoto,
      },
    ],
    staff: [
      {
        slug: "sai-ananya-pavani",
        name: "Sai Ananya Pavani",
        role: "Project Staff / JRF",
        focus: "3D chromatin Interaction & Network Biology",
        initials: "SA",
        photo: ananyaPhoto,
        background:
          "Hi! I’m Ananya. I recently graduated with an Integrated Master’s in Systems Biology from the University of Hyderabad. During the course of my degree, I was able to explore multiple scientific disciplines including genomics, network biology, programming, and molecular biology, which helped me develop a multidisciplinary perspective on biological systems and a strong interest in computational biology.\n\nMy introduction to research began through a wet-lab internship, as a summer fellow at JNCASR, Bangalore, and later at the University of Hyderabad. Over time, my curiosity gradually shifted toward computational approaches, especially during my second internship, this eventually led me to join Dr. Manjari Kiran’s lab for my master’s thesis.",
        researchInterests:
          "My work focuses on understanding the biology of super enhancers from a network perspective. I analyse Hi-C data and build enhancer–promoter interaction networks to understand the behavior of super enhancers and their connectivity patterns across different conditions.",
        funFact: "Outside of research, I enjoy crocheting, reading novels, watching films, and occasionally, travelling to new places.",
      },
    ],
    openPositions: 3,
    mastersAndInterns: [
      {
        name: "Ayush",
        role: "Master's Dissertation",
        period: "Jan 2026 – May 2027",
        initials: "AK",
        photo: ayushPhoto,
      },
      {
        name: "Snigdha Jha",
        role: "Master's Dissertation",
        period: "Aug 2026 – May 2027",
        initials: "SJ",
        photo: snigdhaPhoto,
      },
      {
        name: "Apoorva",
        role: "Intern",
        period: "Current",
        initials: "AP",
        photo: apoorvaPhoto,
      },
      {
        name: "Syeda Shamama Shahnawaz",
        role: "Intern",
        period: "Current",
        initials: "SS",
        photo: shamamaPhoto,
      },
    ],
    alumniPhd: [
      {
        slug: "anubha-dey",
        name: "Dr. Anubha Dey",
        workedAs: "PhD Student (2020–2025)",
        current: "Postdoctoral Research in IIT Bombay, India",
        initials: "AD",
        photo: anubhaPhoto,
        background:
          "I am Dr. Anubha Dey, a computational biologist with a strong foundation in applying machine learning to complex biological systems. I hold a PhD in Systems and Computational Biology, as well as an M.Tech in Computational Biology and a B.Tech in Computer Science. My interdisciplinary training allows me to integrate algorithmic development, data science, and biological knowledge to address challenging problems in biomedicine.",
        researchInterests:
          "My research focuses on cancer genomics, network biology, and integrative multi omics analysis, with an emphasis on understanding tumor heterogeneity and system-level regulatory mechanisms. I develop and apply machine learning and network-based approaches to analyze large scale genomic and single-cell datasets, aiming to translate high-dimensional data into actionable biological insights.",
        academicInterests:
          "I am enthusiastic about contributing to impactful research in single-cell genomics and computational medicine. Through a systems-level perspective, my work seeks to uncover key drivers of disease and support the development of computational frameworks relevant to precision medicine.",
        funFact:
          "“You might have spotted me in the alumni section, but I’m very much still part of the MKLab family, and will continue to be.” Beyond research, I enjoy writing poems and stories, spontaneous short meetups, and exploring new places.",
      },
    ],
    alumniMasters: [
      {
        name: "Fathima Zahara",
        workedAs: "Master's Dissertation Student (2026)",
        current: "Work at Rudhira Biosciences, Inc.",
        initials: "FZ",
        photo: fathimaPhoto,
      },
      {
        slug: "pallabi-shaw",
        name: "Pallabi Shaw",
        workedAs: "Master's Dissertation Student (2025) · Project Staff (2026)",
        current: "PhD in German Cancer Research Center (DKFZ), Heidelberg, Germany",
        initials: "PS",
        photo: pallabiPhoto,
        background:
          "Hi, I’m Pallabi. I recently graduated with an Integrated Master’s of Science in Systems Biology from the University of Hyderabad. During my degree, I received interdisciplinary training in molecular biology, genomics, and bioinformatics, and began my research journey through wet-lab internships before developing a strong interest in computational biology. This interest led me to join this lab for my master’s thesis in 2024, and I am currently continuing here as a project student.",
        researchInterests:
          "My work focuses on exploring the role of enhancer RNAs (eRNAs), a class of non-coding transcripts produced from enhancers, in the formation of transcriptional condensates. These condensates are dynamic nuclear structures that help organize the transcriptional machinery and regulate gene expression. Through computational analysis of genome-wide datasets, I study how eRNAs contribute to the assembly and regulatory properties of these condensates.",
        funFact:
          "Outside of research, you’ll usually find me with a pencil in hand sketching, especially anime characters, taking a refreshing dip in the pool, or dancing like nobody’s watching. I bring that same bubbly, enthusiastic energy into the lab too, where curiosity, creativity, and good vibes are always part of the workflow.",
      },
      {
        slug: "kirthana-viswanathan",
        name: "Kirthana Viswanathan",
        workedAs: "Master's Dissertation Student (2025) · Project Staff (2026)",
        current: "MS in Baylor College of Medicine, Texas, USA",
        initials: "KV",
        photo: kirthanaPhoto,
        background:
          "Hi! I’m Kirthana. I recently graduated with an Integrated Master’s in Systems Biology from the University of Hyderabad. During the course of my degree, I have had the opportunity to train and apply concepts across scientific disciplines and to better understand biological systems. I have also embarked on multiple independent research internships, notably as an MITACS research fellow at Dalhousie University, Canada, for three months, and as a Summer Undergraduate Research Intern at InStem, Bangalore. I first joined the lab briefly as an intern in 2022, rejoined as a master's thesis student in 2024, and am currently continuing as a project student to investigate the cis-regulatory role of long non-coding RNAs.",
        researchInterests:
          "My work entails exploring how long non-coding RNAs regulate protein-coding genes in their neighbourhood on a genome-wide scale, by analyzing various next-generation sequencing datasets. In an attempt to understand the basic process of transcription, I am trying to differentiate between classes of lncRNA based on their function as cis-regulators.",
        funFact:
          "Outside of my research, I enjoy singing, painting, running, and reading novels, especially historical fiction and horror. I once hoola-hooped for a grand total of five hours once, just for the fun of it.",
      },
      { name: "Ajmal", workedAs: "Master's Dissertation Student (2025)", current: "", initials: "AJ", photo: ajmalPhoto },
      { name: "Mavika", workedAs: "Master's Dissertation Student (2024)", current: "", initials: "MV", photo: mavikaPhoto },
      { name: "Shrithika", workedAs: "Master's Dissertation Student (2024)", current: "Research Analyst Position at Exsegen Genomics Pvt. Ltd.", initials: "SG", photo: shrithikaPhoto },
      { name: "Arunima", workedAs: "Master's Dissertation Student (2023)", current: "", initials: "AC" },
      { name: "Koushiki", workedAs: "Master's Dissertation Student (2023)", current: "", initials: "KB" },
      { name: "Gayatri", workedAs: "Master's Dissertation Student (2022)", current: "", initials: "GR" },
      { name: "Surabhi", workedAs: "Master's Dissertation Student (2021)", current: "", initials: "SS" },
      { name: "Sarthak", workedAs: "Master's Dissertation Student (2021)", current: "", initials: "SP" },
      { name: "Shyam", workedAs: "Master's Dissertation Student (2020)", current: "", initials: "SV" },
    ],
    alumniInterns: [
      {
        slug: "suvan-rj",
        name: "Suvan RJ",
        initials: "SR",
        photo: suvanPhoto,
        background:
          "I am Suvan RJ, currently a 3rd-year IMSc Life Sciences student at UoH. I joined MK Lab as an intern in 2024 without any prior experience in computational biology, and through the duration of my working at the lab, I have unlocked a deep appreciation for the field.",
        researchInterests:
          "I am currently looking for new RBP binding sites on RNA modifications and, in doing so, finding WERs for unexplored modifications like pseudouridine by using publicly available RIP-seq data.",
        academicInterests:
          "I have a vested interest in transcriptomics and epitranscriptomics, and through reading and internalizing review articles (assuming that I remember to read them completely), I have developed a budding curiosity for the fields of network biology and protein misfolding.",
        funFact:
          "Quite contrary to the common image of a dry lab researcher not leaving their desks for days at a time, I enjoy playing sports, especially basketball, and also take pleasure in reading novels, though I find that my rapidly decreasing attention span may change this ‘fact’ in a few years. In my spare time, I trade reality for digital realms, often found prowling the Lands Between as a Tarnished or battling fate as the prisoner of a golden headband (IYKYK).",
      },
      {
        slug: "vaishnavi",
        name: "Vaishnavi Tata",
        initials: "VT",
        photo: vaishnaviPhoto,
        background:
          "Hi! I am Vaishnavi, a 2nd-year IMSc Life Sciences student at UoH, currently working as an intern in this lab. My project focuses on alternative splicing of long non-coding RNAs. I am drawn to computational biology because I enjoy finding patterns in biological data and using that to make sense of how living systems work. I’m also excited by the ways computational approaches can be used to solve real-world biological problems.",
        funFact: "Outside the lab, I enjoy reading, playing the piano, swimming, and occasionally getting lost in random Wikipedia rabbit holes.",
      },
      { name: "Debadutta", initials: "DB" },
      { name: "Gayatri", initials: "GY" },
      { name: "Kamalika", initials: "KM", photo: kamalikaPhoto },
      { name: "Maitree", initials: "MT" },
      { name: "Nidhi", initials: "ND", photo: nidhiPhoto },
      { name: "Sreeja", initials: "SJ" },
      { name: "Arshia", initials: "AR", photo: arshiaPhoto },
    ],
  },

  news: [
    { year: 2026, date: "Nov 10", category: "Farewell", text: "Farewell Zahara Fathima, and best of luck for your journey in Rudhira Biosciences, Inc." },
    { year: 2026, date: "Sep 20", category: "Farewell", text: "MKLab bids farewell to Pallabi Shaw & wishes her all the very best for her PhD at the German Cancer Research Center (DKFZ), Heidelberg, Germany." },
    { year: 2026, date: "Sep 17", category: "Announcement", text: "Pleased to Announce" },
    { year: 2026, date: "Sep 3", category: "Award & Honor", text: "MKLab congratulates PI Manjari Kiran for being appointed as one of the speakers at Genomics India Conference (GIC), 2026 held in Bengaluru." },
    { year: 2026, date: "Aug 27", category: "Workshop & Outreach", text: "MKLab done with “Statistics in Biology Using R” workshop at YSR Hall, School of Life Sciences, UoH." },
    { year: 2026, date: "Aug 7", category: "Workshop & Outreach", text: "MKLab members gave a glimpse of how a Systems and Computational Biology Lab works, to the visiting students of St. Francis College for Women." },
    { year: 2026, date: "Jul 3", category: "Farewell", text: "MKLab wishes Kirthana Viswanathan a happy farewell and best wishes for her MS at the Baylor College of Medicine, Texas, USA." },
    { year: 2026, date: "Mar 25", category: "Conference", text: "MKLab members presented their work at the \"RNA Modification and Genome Regulation\" Conference held in Kolkata from 25-26th March, organized by Presidency University." },
    { year: 2026, date: "Jan 7", category: "Welcome", text: "Welcoming new PhD student of the lab \"Ms. Neelima Kondapalli\"" },
    { year: 2025, date: "Nov 7", category: "Publication", text: "Congratulations, team, on the DUBs paper (Deubiquitinases as prognostic biomarker and potential drug target for gynecological cancers)" },
  ],

  courses: [
    {
      code: "SB403",
      title: "Bioinformatics",
      level: "Masters Class",
      semester: "July–Nov (Monsoon Semester)",
      hours: "36 hours",
      featured: true,
      description: "Core graduate course introducing sequence analysis, biological databases, genomics workflows, and computational approaches to molecular biology.",
    },
    {
      code: "SB471",
      title: "R programming (Elective)",
      level: "Masters Class",
      semester: "Jan–May (Winter Semester)",
      hours: "24 hours",
      featured: true,
      description: "Hands-on elective building foundational statistical computing, tidy data manipulation, visualization, and reproducible scripting skills in R.",
      syllabus: [
        { day: "Day 1", topic: "Install and configure R and Rstudio" },
        { day: "Day 2", topic: "Variables, data types and data structure in R" },
        { day: "Day 3", topic: "Installing and loading R packages" },
        { day: "Day 4", topic: "Subsetting with base R package" },
        { day: "Day 5", topic: "Subsetting dataframe with dplyr" },
        { day: "Day 6", topic: "Condition statements and Loops in R" },
        { day: "Day 7 (a)", topic: "Reading and writing files in R" },
        { day: "Day 7 (b)", topic: "Descriptive Statistics in R" },
        { day: "Day 8", topic: "Statistical tests in R" },
        { day: "Day 9", topic: "Plotting and Visualization in R" },
        { day: "Day 10", topic: "Scoping and function" },
      ],
    },
    {
      code: "Masters",
      title: "Computational Systems Biology: Network Biology",
      level: "Masters Class (from PI CV)",
      semester: "Winter Semester",
      hours: "18 hours",
      featured: false,
      description: "Graph-theoretic modeling of protein–protein interaction networks, regulatory networks, hubs, bottlenecks, and disease network topology.",
    },
    {
      code: "Masters",
      title: "Genomics: small RNAs and epigenomics",
      level: "Masters Class (from PI CV)",
      semester: "Winter Semester",
      hours: "18 hours",
      featured: false,
      description: "Regulatory biology of small non-coding RNAs, tRNA fragments, chromatin states, and epigenomic NGS data interpretation.",
    },
    {
      code: "PhD Coursework",
      title: "Omics in Biology: Bioinformatics",
      level: "PhD Coursework (from PI CV)",
      semester: "Monsoon Semester",
      hours: "12 hours",
      featured: false,
      description: "Doctoral module covering high-throughput transcriptomics, integrative multi-omics analysis, and reproducible computational pipelines.",
    },
  ],

  grants: {
    current: [
      { year: "2026", agency: "IIRPIG-ICMR – Indian Council of Medical Research", role: "Co-PI (2026–2030)", amount: "—", title: "Multi-Modal Artificial Intelligence Integration of Systemic and Follicular Single-Cell Transcriptomics for Non-Invasive PCOS theranostics, molecular endotyping, and early discovery." },
      { year: "2026", agency: "IIR-ICMR – Indian Council of Medical Research", role: "PI (2024–2027)", amount: "—", title: "Exploiting Extrachromosomal Circular DNA for Personalized Therapy and Prognostic Markers in Cervical Cancers" },
      { year: "2025", agency: "ANRF-ARG – Department of Science and Technology", role: "PI (2025–2028)", amount: "—", title: "Super-enhancer transcribed lncRNAs (SE-lncRNA) involved in glioblastoma tumorigenesis" },
      { year: "2025", agency: "ASPIRE – Council of Scientific & Industrial Research", role: "PI (2025–2028)", amount: "Rs 26 Lakhs", title: "Role of RNA modification in the regulation of lncRNA-encoded microproteins and their potential applications in cancer therapy." },
      { year: "2024", agency: "IYBF – Department of Biotechnology", role: "PI (2024–2027)", amount: "—", title: "RNA modification in regulating lncRNA-microproteins" },
      { year: "2024", agency: "SERB-CRG – DST Science and Engineering Research Board", role: "Co-PI (2024–2026)", amount: "Rs 44 Lakhs (Co-PI share 3.5 Lakhs)", title: "Role of small non-coding RNAs sorted inside Extracellular Vesicles for RNA Virus Persistence." },
      { year: "2021", agency: "DBT-National Network Project – Department of Biotechnology", role: "PI (2021–2026)", amount: "—", title: "A novel computational approach to generate a genome-based barcode intended to catalog Indian microbial species" },
      { year: "2021", agency: "DBT-BTISNET – Department of Biotechnology", role: "Co-PI (2021–2026)", amount: "—", title: "DBT-Centre for Microbial Informatics at the University of Hyderabad" },
    ],
    completed: [
      { year: "2021–2023", agency: "University of Hyderabad – Research Call 2 (Institute of Eminence)", role: "PI", amount: "Rs 22 Lakhs", title: "A multi-omics and multi-label approach to predict genetic interactions in cancer" },
      { year: "2020–2021", agency: "Start-up Grant – University Grants Commission (UGC)", role: "PI", amount: "Rs 8 Lakhs", title: "Identification of gender-specific prognostic genes in 27 human cancers" },
      { year: "2020–2022", agency: "Early Career Grant – DST-SERB", role: "PI", amount: "Rs 25.66 Lakhs", title: "Integrative approach to characterize human long non-coding RNAs" },
    ],
  },

  piCV: {
    positions: [
      { period: "Dec 2018 – Present", title: "Assistant Professor", org: "Department of Systems and Computational Biology, School of Life Sciences, University of Hyderabad" },
      { period: "July 2016 – Nov 2018", title: "Department of Defense Postdoctoral Award Fellow", org: "Department of Biochemistry and Molecular Genetics, University of Virginia, Charlottesville" },
      { period: "Sep 2014 – June 2016", title: "Research Associate", org: "Department of Biochemistry and Molecular Genetics, University of Virginia, Charlottesville" },
    ],
    education: [
      { period: "Jan 2009 – Sep 2014", degree: "Ph.D. in Computational Biology", inst: "Center for DNA Fingerprinting and Diagnostics (CDFD), Manipal University, Hyderabad, India" },
      { period: "2006 – 2008", degree: "Master’s in Bioinformatics", inst: "Banaras Hindu University (BHU), India" },
      { period: "2003 – 2006", degree: "Bachelor’s in Zoology (Hons.) with Botany and Chemistry", inst: "Banaras Hindu University (BHU), India" },
    ],
    achievements: [
      "University Chancellor Award 2025: Awarded to the University faculty <45 years of age for their excellence in teaching, research, and innovation after joining the University.",
      "Bioclues Innovation Research and Development (BIRD) Awards 2024: Awarded to young scientists below 40 years of age for outstanding contributions in the area of functional genomics and bioinformatics.",
      "Har Govind Khorana Innovative Young Biotechnologist Fellowship (IYBF) 2024: Awarded by the Department of Biotechnology (DBT), Government of India, to support young scientists with innovative ideas and a passion for research in cutting-edge biotechnology fields.",
      "Regional Young Investigator Meeting Award 2023: Awarded by India Bioscience to conduct a Hyderabad Regional Young Investigator Meeting on the proposed topic “Industry-Academia Collaborations to Translate Research to the Product” in 2023.",
      "Nominated and awarded for Poster presentations made by nine women researchers of Hyderabad University on 'Her Research – Our Future' as part of the SpringerNature India Research Tour on 7th October 2023.",
      "Selected to participate in the 2nd Shanghai Cooperation Organization Young Scientists Conclave 2023: Twelve young scientists from 4 SCO nations discussed challenges under “Artificial Intelligence and Big Data research and applications,” organized by DST, India and JNCASR, Bengaluru (6–10 Feb 2023).",
      "SERB Research International Experience Fellowship 2022: A six-month fellowship to work with Dr. Douglas Phanstiel, the University of North Carolina, funded by DST, Government of India.",
      "Best Poster Award 2017: Best poster for presenting postdoc work at the Department of Biochemistry and Molecular Genetics Annual Retreat, School of Medicine, University of Virginia.",
      "Travel Award, 2017: Awarded by RNA Society of North Carolina to attend and present work in RNA Biology XII: RNA Tool and Target, UNC Chapel Hill.",
      "DoD Postdoctoral Training Award, 2016: 2-year postdoctoral training award in prostate cancer from DoD-CDMRP, U.S. Army Medical Research and Materiel Command (MCMR-CD), Proposal Number: PC151085.",
      "Travel Grant, 2013: Awarded by CDFD to attend and present work at ISMB/ECCB 2013, Berlin, Germany.",
      "CSIR Research Fellowship, 2008: Council of Scientific and Industrial Research (CSIR), Govt. of India for pursuing Ph.D. research in India.",
    ],
    memberships: [
      "International Society for Computational Biology (ISCB): Lifetime Member since Feb 2022",
      "Indian Academy of Biomedical Sciences (IABS): Lifetime Member since Feb 2023",
      "International RNA Society membership: 2025–present",
    ],
    researchStatement:
      "The overarching goal of my research is to characterize novel non-coding RNA species and their roles in gene regulation at multiple levels. The group is also involved in developing user-friendly, publicly available scientific tools for next-generation sequencing data analysis, bioinformatics prediction, and computational characterization of molecular players in human health and disease.",
    teachingStatement:
      "I believe in the learning-by-doing approach. I aim to inculcate computational and bioinformatics approaches into students' thinking processes. I acquaint students with in silico approaches to tackling their biological questions. My teaching strategy mainly involves an interaction-based problem-solving approach after introductory courses. I devote extra time each week to receiving feedback to improve my teaching skills as required. I am grateful to my teachers and mentors for instilling in me a love of science and curiosity. I pursue my teaching and mentoring responsibility with the same dedication.",
    doctoralCommittees: [
      "Nisha (2019–2025) Dept. of Systems and Computational Biology (Supervisor: Dr. Vivek)",
      "Ravi Ranjan Kumar (Aug 2019–present) Dept. of Animal Sciences (Supervisor: Dr. Raja Ram Mohan Roy)",
      "Krishan Kumar (Aug 2019–present) Dept. of Plant Sciences (Supervisor: Dr. Radheshyam Mourya)",
      "Tanisha (Aug 2019–present) Dept. of Biochemistry (Supervisor: Prof. Manavathi Brahmanandam)",
      "Md Zainul Ali (Aug 2020–2026) Dept. of Biotechnology and Bioinformatics (Supervisor: Dr. Pankaj Dholaniya)",
      "Keerthana Choudari (2020–present) Dept. of Systems and Computational Biology (Supervisor: Dr. Pramod)",
      "Vitala Vinaya Kruthi (2021–present) Dept. of Animal Biology (Supervisor: Prof. Arunasree)",
      "Angeo Saji (Aug 2021–present) Dept. of Systems and Computational Biology (Supervisor: Dr. Vivek)",
      "Kata Krishna Prasad (2023–present) Dept. of Systems and Computational Biology (Supervisor: Dr. Pramod)",
      "Shailasri S (2025–present) Dept. of Systems and Computational Biology (Supervisor: Dr. Venkat Prasuja)",
      "Pralay Bagh (2026–present) Dept. of Systems and Computational Biology (Supervisor: Prof. Nagarajaram)",
      "Ghaliya (2026–present) Dept. of Systems and Computational Biology (Supervisor: Dr. Venkat Prasuja)",
    ],
    journalReviewer: [
      "Systems Biology and Applications",
      "Computational Structural Biology",
      "Briefing in Bioinformatics",
      "RNA Biology",
      "Frontiers in RNA",
      "PLoS Computational Biology",
      "PLoS One",
    ],
    organizedEvents: [
      "Organized a workshop on “Statistics in Biology Using R” on 27th August 2026 at the School of Life Sciences, University of Hyderabad.",
      "Organized a workshop on “Personal Branding in Life Sciences” on 29th March 2025 at School of Life Sciences, University of Hyderabad.",
      "Organized a 2-day Regional Young Investigator Meeting - Hyderabad on 2nd–3rd Feb 2024 at Mahindra University, Hyderabad.",
      "One-day \"BioQuest\" symposium organized by School of Life Sciences, University of Hyderabad.",
      "Two-day workshop on “New Vistas in Drug Discovery” organized by University of Hyderabad and Center for Modeling, Simulation and Dynamics from 16–18 Feb 2019.",
      "Workshop on “Data Science using R” at CR Rao Institute from 21–24 Dec 2019.",
      "UGC-HRDC Refresher course in Life Sciences organized by University of Hyderabad from 16th to 28th November, 2020.",
      "Skill Development program organized by School of Life Sciences, University of Hyderabad from 18–23 Dec 2019.",
    ],
    invitedTalks: [
      "Invited for panel discussion on “Genomics Education in AI era” in the 6th Genomics India Conference (GIC2026), 1–3 Sep 2026, GKVK Campus, Bengaluru.",
      "Resource person for “Statistical Tools for Bioscience Research” at the Faculty Development Program, PSG College of Arts & Science, Coimbatore, 12 Jun 2026.",
      "Invited talk on “Epitranscriptomic Insights into Translation of Long Non-Coding RNAs” at the 13th RNA Meeting, IISc Bangalore, 27–29 Apr 2026.",
      "Invited talk on “Epitranscriptomic Regulation of lncRNA-Encoded Microproteins” at RNA Salon “RNA Modification and Genome Regulation,” Presidency University, Kolkata, 25–26 Mar 2026.",
      "Keynote speaker on “Systems and Computational Approaches to Modern Biology” at FLSICBR26, Tara College, 5–6 Mar 2026.",
      "Invited talk on “Systems Biology: A holistic approach to understand molecular complexity” at Justice Basheer Ahmed Sayeed College for Women, Chennai (TBBS), 16–17 Feb 2026.",
      "Invited talk titled “MAGICAL: A Systems and ML-Based Framework for identifying Genetic Interactions underlying Genome Instability,” SBC(I) 94th Annual Meeting, University of Hyderabad, 19 Dec 2025.",
      "Invited speaker: “Decoding the Dark Matter of the Transcriptome using Big Data Approach” at Symposium on Biological Big Data Analysis, CHPC, IISER Thiruvananthapuram, 7 Nov 2025.",
      "Invited resource person for “Bioinformatics and Tools,” workshop organized by RICH, Hyderabad, 22 Oct 2025.",
      "Invited talk titled “From Bench to Bytes: Computational Oncology for Identifying Druggable Cancer Targets,” 8th Annual Conference of SAAE-I, CSIR-CCMB, Hyderabad, 10 Oct 2025.",
      "Invited talk on “MAGICAL-ly predicting genetic interactions and therapeutic targets in cancer” at India Investigator Network Symposium – Hyderabad Chapter, SLS, UoH, 22 Aug 2025.",
      "Invited talk: “Application of biological network in the understanding of drug sensitivity and resistance,” workshop on Integrative approaches to protein structures, dynamics, and interactions, 20 Feb 2025.",
      "Invited talk on “MAGICAL-ly identifying genetic interactions in cancer,” online FDP on Computational Genomics, NIT Warangal, 14 Nov 2024.",
      "Invited talk on “MAGICAL: A Multi-class Classifier to Predict Genetic Interactions in cancer,” AI for Pharma and Biotech workshop, FABA, 13 Dec.",
      "Invited talk on “MAGICAL-ly identifying genetic interactions in cancer,” statistical genomics workshop at NCBS, Bangalore, 6 Sep 2024.",
      "Invited talk on “Systems Biology and Cancer Genomics” at IIT-Hyderabad, BioTalks, 19 Mar 2024.",
      "Invited talk on “Towards an understanding of genetic interactions in cancer” at IIT-Patna, WoCOn 2024, 19–21 Apr 2024.",
      "Invited talk on “Long non-coding and transcript complexity” in BioAnveshana International Conference (UoH 50th Year), 17 Feb 2024.",
      "Two-day hands-on training for Bioinformatics module at Skill Development Center, University of Hyderabad, 2–3 Nov 2023.",
      "Hands-on session on “Statistical Analysis in Biology using R,” Refresher Course, HRDC, University of Hyderabad, 31 Jul – 12 Aug 2023.",
      "Hands-on session on “Linux commands” in Workshop on Microbiome and Genome Analysis at CMSD, DBT-CMI, UoH, 19–21 Jul 2023.",
      "Talk and hands-on sessions on “Sequence Alignment and Molecular Phylogenetics,” National Institute of Animal Biotechnology, 14 Jun 2023.",
      "R programming hands-on session in “Basics to advanced Multiomics data analysis” internship, Nextgenhelper, 23–24 Jun 2023.",
      "Motivational Talk on “Empowering women in STEM” under DST Vigyan Jyoti scheme, Jawahar Navodaya School, Hyderabad, 30 Jul 2022.",
      "Talk on “Recent trends in biological research,” Regional Children Science Congress (RCSC), 21–23 Feb 2021.",
      "International webinar on ‘Coding beyond computers,’ Clevered, Hyderabad, 10 Sep 2021.",
      "Two online hands-on sessions on R programming in “How to start Bioinformatics, data analysis for NGS,” Nextgenhelper, 14–31 Aug 2021.",
      "International workshop on “R programming in Bioinformatics, structure, and NGS analysis,” Nextgenhelper, 12–30 Dec 2021.",
      "National workshop on Recent trends in Bioinformatics at St. Francis College, Hyderabad, 18 Jan 2020.",
      "Synapsis lecture at BITS Pilani, Hyderabad on “Brief overview of Bioinformatic tools for NGS analysis and lncRNA as a promising biomarker,” 12 Mar 2020.",
      "Seminar on Aspects of Gene and Cellular Regulation at Institute of Mathematical Sciences, Chennai, 6–7 Jan 2020.",
      "Guest lecture on “Bioinformatics: From sequence analysis to prognostic markers” at Bhavan’s Vivekananda College, Hyderabad, 12 Aug 2020.",
      "Talk on “Statistics in Biology” in Refresher course in Life Sciences, HRDC-UoH, 25 Nov 2020.",
      "Talk on “Long non-coding RNAs based prognostic signature for Gliomas” at BioQuest 2019.",
    ],
  },

  groupPhotos: [
    {
      id: "group-2025",
      year: "2025",
      label: "2025",
      src: group2025,
      caption: "Left to Right: Shrithika, Pallabi, Kirthana, Ananya, Manjari, Shirshanya, Anubha, Amardeep, Ajmal",
    },
    {
      id: "group-2024",
      year: "2024",
      label: "2024",
      src: group2024,
      caption: "Left to Right: Shrithika, Pallabi, Amardeep, Ananya, Mavika, Manjari, Anubha, Kirthana, Ajmal, Shirshanya",
    },
    {
      id: "group-2023-lab",
      year: "2023",
      label: "2023 · Lab",
      src: group2023Lab,
      caption: "Left to Right: Amardeep, Koushiki, Arunima, Anubha, Manjari, Shrithika",
    },
    {
      id: "group-2023",
      year: "2023",
      label: "2023 · Reunion",
      src: group2023,
      caption: "Left to Right: Shirshanya, Amardeep, Manjari, Anubha, Koushiki, Arunima",
    },
    {
      id: "group-2022",
      year: "2022",
      label: "2022",
      src: group2022,
      caption: "Left to Right: Kirthana, Amardeep, Manjari, Anubha, Gayathri, Anmol, Haneesh",
    },
    {
      id: "group-2021",
      year: "2021",
      label: "2021",
      src: group2021,
      caption: "Left to Right: Amardeep, Gayathri, Koushiki, Shirshanya, Manjari, Anubha, Haneesh",
    },
    {
      id: "group-2020",
      year: "2020",
      label: "2020",
      src: group2020,
      caption: "Left to Right: Haneesh, Sarthak, Manjari, Anubha, Surabhi",
    },
  ],
};
