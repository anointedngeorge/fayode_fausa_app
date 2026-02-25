import { ImageAsset } from "@/data/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import TableComponent from "./TableComponent";
import { PdfReader } from "./PdfReader";
import ListComponent from "./ListComponent";

export const ProfileComponent = ({
  show_container,
}: {
  show_container: boolean;
}) => {
  const features = [
    { title: "PhD, Accounting & Finance", sub: "Highest Qualification" },
    { title: "30+ Years", sub: "Experience" },
    { title: "CEO, ANAN (2022–2026)", sub: "Former Role" },
    { title: "Associate Professor", sub: "Academic Rank" },
  ];

  const qualifications = [
    "PhD",
    "MSc (Leeds, UK)",
    "MBA",
    "FCNA",
    "FCTI",
    "FTM",
    "FCSA(USA)",
    "FRCN",
    "FNIM",
    "FCCrFA",
    "C.IoD",
    "CRISC",
    "CEH",
  ];

  const education = [
    "Ph.D. in Accounting & Finance",
    "M.SC in Accounting",
    "MBAin Management",
    "Post-Graduate Diploma in Financial Management",
    "Post-Graduate Professional Diploma in Accounting",
    "Diploma in French Language",
    "Diploma in Computer Studies",
    "Bachelor of Science in Accounting ",
    "Higher National Diploma in Accounting",
    "Higher Diploma in Accounting",
  ];

  const locations = [
    { country: "India", cities: ["Mumbai"] },
    { country: "Algeria", cities: ["Algiers"] },
    { country: "United Kingdom", cities: ["London", "Leeds", "Halls"] },
    { country: "Uganda", cities: ["Entebbe", "Kampala"] },
    {
      country: "United States of America",
      cities: ["Baton Rouge", "New Orleans"],
    },
    { country: "United Arab Emirates", cities: ["Dubai", "Abu Dhabi"] },
    { country: "Morocco", cities: ["Marrakech"] },
    { country: "Kenya", cities: ["Nairobi", "Mombasa"] },
    { country: "Zimbabwe", cities: ["Victoria Falls", "Harare"] },
    { country: "Ghana", cities: ["Accra", "Cape Coast"] },
    { country: "Mozambique", cities: ["Maputo"] },
    { country: "Benin Republic", cities: ["Cotonou"] },
    { country: "Canada", cities: ["Montreal"] },
    { country: "Tanzania", cities: ["Dar es Salaam", "Zanzibar"] },
    { country: "Togo", cities: ["Lome"] },
    { country: "Senegal", cities: ["Dakar"] },
    { country: "Ireland", cities: ["Dublin"] },
    { country: "Cote d'Ivoire", cities: ["Abidjan", "Yamoussoukro"] },
    { country: "Liberia", cities: ["Monrovia"] },
    { country: "Gambia", cities: ["Banjul"] },
    { country: "Burkina-Faso", cities: ["Ouagadougou"] },
    { country: "Cameroun", cities: ["Douala"] },
    { country: "Namibia", cities: ["Windhoek"] },
    { country: "Mauritius", cities: ["Belle Mare", "Port Louis"] },
    { country: "Qatar", cities: ["Doha"] },
    { country: "Tunisia", cities: ["Tunis"] },
    { country: "Belgium", cities: ["Brussel"] },
    { country: "Netherland", cities: ["Amsterdam"] },
    { country: "Niger Republic", cities: ["Niamey"] },
    { country: "Egypt", cities: ["Cairo"] },
  ];

  // [Qualification, Awarding Institution, Year]

  const qualification = [
    [
      "Ph.D. (Accounting & Finance)",
      "Nasarawa State University, Keffi, Nigeria",
      "2017",
    ],
    [
      "M.Sc (Accounting)",
      "Leeds Beckett University, Leeds, United Kingdom",
      "2014",
    ],
    ["MBA (Management)", "Ambrose Ali University, Ekpoma", "2002"],
    [
      "Post-Graduate Diploma (Financial Management)",
      "Abubakar Tafawa Balewa University, Bauchi",
      "1999",
    ],
    [
      "Post-Graduate Professional Diploma (Accounting)",
      "Nigerian College of Accountancy, Jos",
      "1996",
    ],
    ["Diploma (French Language - A1)", "Alliance Francaise, Jos", "2014"],
    [
      "Diploma (Computer Studies)",
      "Shadan Computer Training School, Jos",
      "1994",
    ],
    [
      "Bachelor of Science (Accounting)",
      "Nasarawa State University, Keffi",
      "2020",
    ],
    [
      "Higher National Diploma (Accounting)",
      "Dorben Polytechnic, Bwari, Abuja",
      "2012",
    ],
    [
      "Higher Diploma (Accounting)",
      "Plateau School of Accountancy and Management Studies, Jos",
      "1993",
    ],
    [
      "National Business Certificate (GCE/NBC)",
      "National Business and Technical Examination Board (NABTEB)",
      "2012",
    ],
    [
      "West African School Certificate (WASC)",
      "West African Examination Council (WAEC)",
      "1985",
    ],
  ];

  const institution = [
    [
      "Association of National Accountants of Nigeria (ANAN)",
      "Chief Executive Officer (CEO)",
      "April 2022 – March 2026",
    ],
    ["Board of Governors, NCA", "Member", "April 2022"],
    ["ANAN Council", "Secretary", "April 2022"],
    [
      "Nigerian College of Accountancy, Jos",
      "Director-General",
      "March 2019 – April 2022",
    ],
    ["Board of Governors, NCA", "Secretary", "March 2019 – April 2022"],
    [
      "Nigerian College of Accountancy, Jos",
      "Director of Studies",
      "2014 – 2019",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Acting Director-General",
      "October 2017",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Acting Director-General",
      "July 2017",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Acting Director-General",
      "December 2016",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Acting Director-General",
      "October 2016",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Acting Director-General",
      "May 2015",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Acting Director-General",
      "June 2015",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Acting Director-General",
      "November 2014",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Acting Director-General",
      "June 2014",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Acting Director-General",
      "August 2013",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "College Secretary / Head of Administration",
      "May 2013",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Director of Studies",
      "2011 – 2013",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Acting Director-General",
      "August 2011",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Director, Students Affairs",
      "September 2010",
    ],
    ["Nigerian College of Accountancy, Jos", "Director, ICT", "November 2006"],
    [
      "Nigerian College of Accountancy, Jos",
      "Director of Studies",
      "2006 – 2010",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Director of Studies",
      "2002 – 2004",
    ],
    ["Nigerian College of Accountancy, Jos", "Acting Bursar", "2001 – 2002"],
    [
      "Nigerian College of Accountancy, Jos",
      "Assistant Director of Studies",
      "1999 – 2000",
    ],
    ["Nigerian College of Accountancy, Jos", "Acting Accountant", "1999"],
    ["Nigerian College of Accountancy, Jos", "Systems Analyst", "1998"],
    ["Nigerian College of Accountancy, Jos", "Acting Director-General", "2000"],
    [
      "Nigerian College of Accountancy, Jos",
      "Personal Assistant to Director-General",
      "1998 – 2001",
    ],
    ["Soft Touch Computer Bureau, Jos", "Training Manager", "1997"],
    ["Shadan Computer Training School, Jos", "Software Instructor", "1994"],
    ["R.T. Briscoe Nigeria Plc, Lagos", "Industrial Attaché", "1990"],
    ["Nigeria Airways, Lagos", "Industrial Attaché", "1990 – 1991"],
  ];

  const teaching_experience = [[""]];

  // [Grade, Professional Body, Date]

  const MEMBERSHIP = [
    ["Fellow", "Association of National Accountants of Nigeria (ANAN)", "2008"],
    ["Fellow", "Chartered Institute of Taxation of Nigeria (CITN)", "2011"],
    ["Fellow", "Chartered Institute of Treasury Management of Nigeria", "2011"],
    [
      "Fellow",
      "Association of Chartered Systems Accountants, USA (ACSA)",
      "2012",
    ],
    [
      "Fellow",
      "Chartered Institute of Forensics and Certified Fraud Investigators of Nigeria",
      "2023",
    ],
    ["Fellow", "Nigerian Institute of Management (NIM, Chartered)", "2023"],
    ["Life Member", "Chartered Institute of Directors, Nigeria", "2023"],
    ["Fellow", "Association of Forensic Accounting Researchers", "2025"],
    [
      "Member",
      "Chartered Institute of Taxation of Nigeria (CITN) – Practicing License No. 2279",
      "2023",
    ],
    ["Member", "Financial Reporting Council of Nigeria", "2012"],
    ["Member", "Institute of Management Consultants", "2002"],
    ["Member", "Nigerian Institute of Management", "2004"],
    [
      "Member",
      "Association of National Accountants of Nigeria (ANAN) – Practicing Certificate No. 635",
      "2008",
    ],
    [
      "Member",
      "Association of National Accountants of Nigeria (ANAN) – Practicing License No. 635",
      "2022",
    ],
  ];

  const BookPublications = [
    "Fasua, K. O. (2020). Emerging Issues in Information and Communication Technology. Larigraphics Publishers, Jos",
    "Fasua, K. O. (2019). Insight Into Contemporary Public Sector Accounting & Finance, Second Edition. Larigraphics Press, Jos",
    "Fasua, K. O. (2016). Information Technology for Business: Questions and Suggested Answers. Larigraphics Press, Jos",
    "Fasua, K. O. (2015). The J. K. Odumeru Phenomenon: A Study in Servanthood Leadership – ABiography. Larigraphics Publishers, Jos",
    "Fasua, K. O. (2015). Public Sector Accounting & Finance: Questions and Suggested Solutions. Larigraphics Press, Jos",
    "Fasua, K. O. (2014). Insight into Contemporary Public Sector Accounting & Finance. Larigraphics Publishers, Jos",
    "Fasua, K. O. (2009). Public Sector Accounting and Finance: Manual. Larigraphics Press, Jos",
    "Fasua, K. O. (2006). Entrepreneurship: Theory, Strategy and Practice. Bee Printing and Publishing Coy, Jos",
    "Fasua, K. O. (2005). Business Information and Communication Systems. Larigraphics Publishers, Jos",
  ];

  const journalPublications = [
    "Fasua, K. O. (2025). Financial ratios and market value of firms. European Journal of Business Startups and Open Society, 5(8), 31–44. http://innovatus.es/index.php/ejbsos",
    "Fasua, K. O. (2025). Influence of Corporate Governance Characteristics on Audit Tenure of Listed Firms in Nigeria. Research Journal of Business and Economic Management, 8(2), 26–32. https://doi.org/10.31248/RJBEM2025.110",
    "Fasua, K. O. (2025). The effect of profitability and market-based ratios on firm valuation: Evidence from an emerging market. International Journal of Economics and Finance, 11(6), 1–13",
    "Fasua, K. O. (2025). Financial Performance Indicators and Market Value of Listed Firms. Journal of International Trade and Economics in Central Asia, 1, 26–40. https://maulanapress.com/index.php/tijara",
    "Fasua, K. O. (2025). Determinants of market value in listed companies: A performance-based perspective. Markaziy Osiyo Madaniy Me’rosi Va Turizm Tendensiyalari Jurnali, 2(1), 19–31. https://qomar.uz/index.php/MOSTTJ",
    "Fasua, K. O. (2025). Effect of capital structure and profitability indicators on firms’ share price in Nigeria. Research Journal of Management Practice, 5(4), 1–11. https://doi.org/10.5281/zenodo.15255155",
    "Fasua, K. O., & Sinebe, M. T. (2024). Research and Development expenditure As a Determinant of Long-Term Debt Sustainability in Nigerian Firms. Journal of Economics, Management and Social Sciences. Federal University Wukari. Vol. 10 no 2 April, 2024",
    "Fasua, K. O. (2024). Dividend Payout Practices and Sustainable Profitability in Nigerian Firms under Volatile Market Conditions. Journal of Multidisciplinary Research of Ignatius Ajuru University Vol. 6 No.4, December 2024",
    "Olayinka, M., Dimu, E., Matthew, S., Philippe, L., & Kayode, O. F. (2023). Extractive sector governance: Does a nexus of accountability render local extractive industries' transparency initiatives ineffective? Meditari Accountancy Research. https://www.emerald.com/insight/2049-372X.htm",
    "Fasua, K. O. (2022). Effect of Foreign Investment Inflows on Capital Market Performance in Nigeria. Journal of Applied Accounting Research, Emerald Publishing",
    "Zumbung, D. M., Abaliki, O. A., Fasua, K. O., Iliya, N. S., & Garba, A. M. (2020). Investigating board size as a determinant of risk disclosure by deposit money banks in Nigeria. AJORMS, 1(1), 234–248. https://ajormsplas.ung",
    "Fasua, K. O., Mamman, S., & Ojo, L. O. (2020). Does Audit Committee Effectiveness affect External Audit Fees? Evidence from Listed Healthcare Companies in Nigeria. International Journal of Scientific & Engineering Research Volume 11, Issue 10, October 2020, page 878, ISSN 2229-5518",
    "Fasua, K. O., Abubakar, I. A., Ojo, L. O., & Mfon, U. (2020). Ownership structure and capital structure: Evidence from listed agricultural firms in Nigeria. International Journal of Social Science and Economic Research, 5(10), 3152–3168. https://doi.org/10.46609/IJSSER.2020.v05i10.022",
    "Fasua, K. O., & Ojo, L. O. (2020). Effect of firms’ characteristics on capital structure of listed oil and gas firms in Nigeria. The International Journal of Business & Management, 8(10), 188–203",
    "Ojo, L. O., Oyedokun, G. E., & Fasua, K. O. (2020). Governance and Financial Performance of Quoted Agricultural Companies in Nigeria. GOUni Journal of Faculty of Management and Social Sciences (8/1), page 56-75",
    "Olayinka, M., Dimu, E., Sebastian, M., & Fasua, K. O. (2017). Consequences of the Treasury Single Account policy on the wealth of Nigerian commercial banks’ shareholders. Emerging Markets Finance and Trade, 1–15. https://doi.org/10.1080/1540496X.2017.1356715",
    "Fasua, K. O., & Uwaleke, U. (2016). Effect of Pressure on Fraud in Nigerian Deposit Money banks. Nigerian Journal of Accounting Research, Vol. 12, number 2, December, 2016, page 139-162, ISSN: 978-125-193-X",
    "Fasua, K. O., Olayinka, M., & Uwaleke, U. J. (2012). Financial Failure: Is Risk Management or Weak Corporate Governance the Catalyst? The Nigerian Accounting Horizon, Volume 5, Number 2, July-December 2012, page 66",
    "Fasua, K. O., & Garba, A. M. (2020). Exploration of Forensic Accounting Practice As a Tool for Fraud Detection and Prevention in Nigeria: Focus on Economic and Financial Crimes Commission",
    "Fasua, K. O., & Musa, A. M. (2016). Firm Specific Attributes and Financial Performance of Quoted Conglomerate Companies in Nigeria",
    "Fasua, K.O., & Garba, A. M. (2022). Forensic Accounting Skills and Fraud Detection in the Nigerian Insurance Industry",
    "Fasua, K. O., Garba, A. M., & Vongdoh, L. C. (2023). The Effect of Tax Revenue on Poverty Reduction in Nigeria",
    "Osegbue, I. F., Egbunike, P. A., & Fasua, K. O. (2012). The Moderating Effect of firm Size on Tax Saving and Investment Expenditure in Nigeria",
  ];

  const academic_paper = [
    "Fasua, K. O. (2023). The Effect of Tax Revenue On Poverty Reduction in Nigeria. 6th Chartered Institute of Taxation of Nigeria Annual International Academic Conference on Taxation. Anan University, Kwall, Plateau State, Nigeria.",

    "Fasua, K. O.; Garba, A. M; Dorkur, P. Z; & Chirman, V. L. (2023). The Effect of Taxation on the Performance of the Manufacturing Sector in Nigeria (1994-2021). 6th Chartered Institute of Taxation of Nigeria Annual International Academic Conference on Taxation. Anan University, Kwall, Plateau State, Nigeria.",

    "Fasua, K. O. (2022). The 4th industrial revolution: Leveraging on 21st century opportunities. A paper presented at ISACA Abuja Chapter Annual Conference, Abuja, Nigeria.",

    "Fasua, K. O. (2020). The fourth industrial revolution and the accountancy profession. A paper presented at ANAN 25th Annual National Conference, Nigeria.",

    "Fasua, K. O. (2018). Determinants of fraud in quoted deposit money banks in Nigeria. A paper presented at Academic Conference of African Accounting and Finance Association (AAFA), Dakar, Senegal.",

    "Fasua, K. O. (2016). Consequences of the Treasury Single Account policy on Nigerian commercial banks’ shareholders wealth. A paper presented at Academic Conference of African Accounting and Finance Association (AAFA), Nairobi, Kenya.",
  ];

  const workshop_paper = [
    "Fasua, K. O. (2025). Youth Productivity and the Menace of Substance Abuse. A paper presented at Rotary Club of Askokoro Diamond, Nigeria.",

    "Fasua, K. O. (2025). Rotary E-Clubs: The Pathway for Rotary’s Membership Development. A paper presented at Rotary E-Club of Golden, Nigeria.",

    "Fasua, K. O. (2025). From Rotaract to Rotary: A legacy of Service and Leadership. A paper presented at Rotary Club of Abuja Urban, Nigeria.",

    "Fasua, K. O. (2025). Rotary Club Governance and Board Responsibilities. A paper presented at Zone 4, District 9127 Rotary International Vibrant Club Seminar, Nigeria.",

    "Fasua, K. O. (2025). Engaging Club Members. A paper presented at District 9127 Rotary International District Learning Seminar, Nigeria.",

    "Fasua, K. O. (2024). Attraction of Quality Membership: The Foundation of Vibrant Rotary Clubs. A paper presented at Zone 4, District 9127 Rotary International Vibrant Club Seminar, Nigeria.",

    "Fasua, K. O. (2022). Optimizing the roles of professionals in IPSAS implementation in Nigeria. A paper presented at FAAC Sub-Committee on IPSAS Implementation Retreat, Nigeria.",

    "Fasua, K. O. (2022). Voluntary tax compliance and taxpayer charter. A paper presented at CITN Lagos Zone 2022 Mandatory Professional Training Programme (MPTP), Lagos, Nigeria.",

    "Fasua, K. O. (2022). Voluntary tax compliance and taxpayer charter. A paper presented at CITN Jos Zone 2022 Mandatory Professional Training Programme (MPTP), Jos, Nigeria.",

    "Fasua, K. O. (2021). Accounting standards and their impact on global financial reporting and auditing: Appraising the updates. Directors of Finance Retreat, Plateau State, Nigeria.",
    "Fasua, K. O. (2021). An appraisal of the Sustainable Development Goals (SDGs) and their impact on the global economy. A paper presented at 2021 NYSC SDGs Awareness Day, Nigeria.",

    "Fasua, K. O. (2021). Assessing the impact of the Sustainable Development Goals on economic development. A paper presented at the Stakeholder workshop by SDG Office, Plateau State, Nigeria.",

    "Fasua, K. O. (2021). Big Data analysis: Implications for the accountancy profession. A paper presented at the Workshop for ITF Finance staff by Breakthrough Consults, Nigeria.",

    "Fasua, K. O. (2021). Business disruption and continuity: Repositioning for resilience. A paper presented at 2021 CITN Mandatory Professional Training Programme (MPTP), Nigeria.",

    "Fasua, K. O. (2021). Developing strategies and ICT applications in branch administration and recovery of members' indebtedness. A paper presented at 2021 ANAN Retreat for Branch Executive Members, Nigeria.",

    "Fasua, K. O. (2021). Financial planning and control. A paper presented at 2021 NIPSS Training Sessions, Nigeria.",

    "Fasua, K. O. (2021). Fraud investigation. A paper presented at Workshop for Directors of finance, Plateau State by Breakthrough Consult, Nigeria.",

    "Fasua, K. O. (2021). Impact of fiscal decentralization on quality financial reporting at the local governments level in Plateau State. A paper presented at Workshop for all Finance Personnel of Local Government in Plateau State by Breakthrough Consultancy Ltd., Nigeria.",

    "Fasua, K. O. (2021). Marketing and adding values to ANAN. A paper presented at ANAN Membership Retreat, Abuja, Nigeria.",

    "Fasua, K. O. (2021). Relevance of ICT in budgeting. A paper presented at Workshop by WEMOG Consults for Finance Staff of Benue LGA, Nigeria.",

    "Fasua, K. O. (2021). Role of accounting technology in a pandemic. A paper presented at Chartered Institute of Treasury Management Training Workshop, Nigeria.",

    "Fasua, K. O. (2021). Updates on international standards. A paper presented at ANAN Practitioners' Forum, Nigeria.",

    "Fasua, K. O. (2020). Crime prevention in a contemporary Nigerian system: The place of discipline and mutual understanding. A paper presented at Police Community Day, Rantya, Jos, Nigeria.",

    "Fasua, K. O. (2020). Designing and implementing an effective internal control system for an organisation, Nigeria. A paper presented at ITF workshop for Audit Staff.",

    "Fasua, K. O. (2020). Domestic taxation and post-pandemic quest for economic recovery. A paper presented at 2020 CITN Mandatory Professional Training Programme (MPTP), Nigeria.",

    "Fasua, K. O. (2020). Emerging issues in information and communication technology. A paper presented at NIM Professional Round Table, Lagos, Nigeria.",

    "Fasua, K. O. (2020). Taxation of educational activities in Nigeria. A paper presented at 2020 CITN Mandatory Professional Training Programme (MPTP), Nigeria.",

    "Fasua, K. O. (2019). Blockchain technology and artificial intelligence in the accounting profession. A paper presented at Business Economic Empowerment Committee (BEEC), Plateau State, Nigeria.",

    "Fasua, K. O. (2019). Fraudulent accounting: The case of stocks and shares. A paper presented at Police Staff College Capacity Building Workshop, Nigeria.",

    "Fasua, K. O. (2019). International public sector accounting standards in Nigeria: The score card. A paper presented at ANAN Delta State Branch End of Year Dinner, Nigeria.",

    "Fasua, K. O. (2019). The place of NCA alumni in the development of the Nigerian College of Accountancy, Nigeria.",

    "Fasua, K. O. (2018). Business communication, marketing and relationship management skill. A paper presented at the Pre-Retirement Training Workshop, Organised by NIPSS, Jos, Nigeria.",

    "Fasua, K. O. (2018). Developing entrepreneurial skills and managing personal finances. A paper presented at NIPSS – Policy Strategy and Leadership Course (PSLC 30), Organised by NIPSS, Kuru, Jos, Nigeria.",

    "Fasua, K. O. (2018). Developing entrepreneurial skills and managing personal finances. A paper presented at NIPSS – Policy Strategy and Leadership Course (PSLC 29), Organised by NIPSS, Kuru, Jos, Nigeria.",

    "Fasua, K. O. (2018). Disruptive technology and the accounting profession. A paper presented at 2018 NIM Management Day, Nigeria.",

    "Fasua, K. O. (2018). Entrepreneurship: Starting, nurturing and sustaining your business. A paper presented at Pre-Retirement Training Workshop, Organised by NIPSS, Jos, Nigeria.",

    "Fasua, K. O. (2018). Managing organizational finances. A paper presented at NIPSS – Policy Strategy and Leadership Course (PSLC 29), Organised by NIPSS, Kuru, Jos, Nigeria.",

    "Fasua, K. O. (2018). Managing organizational finances: Principles and practice. A paper presented at NIPSS – Policy Strategy and Leadership Course (PSLC 30), Organised by NIPSS, Kuru, Jos, Nigeria.",

    "Fasua, K. O. (2018). Personal financial discipline: How to attain long-term personal financial security. A paper presented at Workshop on Ethics, Workplace Efficiency and Financial Discipline for Senior Staff of NIPSS, Organised by NIPSS Consult, NIPSS Kuru, Jos, Nigeria.",

    "Fasua, K. O. (2018). Preparation of feasibility study reports and business plans. A paper presented at Pre-Retirement Training Workshop, Organised by NIPSS, Jos, Nigeria.",

    "Fasua, K. O. (2018). Professionalism and social responsibility: Lagos State accountants' perspective. A paper presented at the ANAN Ikeja Branch Annual Dinner, Nigeria.",

    "Fasua, K. O. (2017). Basic accounting and financial record-keeping in business. A paper presented at the Pre-Retirement Training Workshop, Organised by NIPSS, Nigeria Police College, Jos, Nigeria.",

    "Fasua, K. O. (2017). Budget formulation, preparation, justification and submission. A paper presented at Budgeting and Appropriation course for Legislators and Legislative Aids, Organised by NIPSS Consult, NIPSS Kuru, Jos, Nigeria.",

    "Fasua, K. O. (2017). Performance budgeting. A paper presented at Budgeting and Appropriation course for Legislators and Legislative Aids, Organised by NIPSS Consult, NIPSS Kuru, Jos, Nigeria.",

    "Fasua, K. O. (2017). Personal financial planning; Budgeting and financial risk management. A paper presented at the Pre-Retirement Training Workshop, Organised by NIPSS, Nigeria Police College, Jos, Nigeria.",

    "Fasua, K. O. (2017). Pre-budget planning and execution. A paper presented at Budgeting and Appropriation course for Legislators and Legislative Aids, Organised by NIPSS Consult, NIPSS Kuru, Jos, Nigeria.",

    "Fasua, K. O. (2017). Public budgets: Concepts, structure, computation and types of budgets. A paper presented at the Budgeting and Appropriation course for Legislators and Legislative Aids, Organised by NIPSS Consult, NIPSS Kuru, Jos, Nigeria.",

    "Fasua, K. O. (2017). Understanding types of investments. A paper presented at the Pre-Retirement Training Workshop, Organised by NIPSS, Nigeria Police College, Jos, Nigeria.",

    "Fasua, K. O. (2016). Budgeting and risk management. A paper presented at the Pre-Retirement Training Workshop, Organised by NIPSS, Colon Carter Center, Lamingo, Jos, Nigeria.",

    "Fasua, K. O. (2016). Financial regulations and prudent management of resources at the FCTA area councils. A paper presented at the Capacity Building Workshop for Chairmen, Councilors and other Officials of the FCT, Organised by NIPSS, NIPSS Kuru, Jos, Nigeria.",

    "Fasua, K. O. (2016). Framework for policy impact analysis. A paper presented at NIPSS – Policy Strategy and Leadership Course (PSLC 24), Organised by NIPSS, NIPSS, Kuru, Jos, Nigeria.",

    "Fasua, K. O. (2016). Personal financial planning and management. A paper presented at the Pre-Retirement Training Workshop, Organised by NIPSS, Colon Carter Center, Lamingo, Jos, Nigeria.",

    "Fasua, K. O. (2016). Types of investments. A paper presented at the Pre-Retirement Training Workshop, Organised by NIPSS, Colon Carter Center, Lamingo, Jos, Nigeria.",
  ];

  const international_workshop = [
    "Pan African Federation of Accountants (PAFA) Board Meetings in Maputo, Entebbe, Marakesh, Tunis, Algiers, Windhoek, Dar Es Salaam, Ouagadougou, Nairobi, Mauritius, Kigali, Victoria Falls, Dakar. (2022-2025)",

    "Accountancy Bodies in West Africa (ABWA) Council Meetings in Cotonou, Accra, Lome, Abuja, Banjul, Douala, Dakar, Freetown, Abidjan, Niamey. (2022-2025)",

    "Pan African Federation of Accountants (PAFA), Accounting Stakeholder Forum. Nairobi, Kenya. January, 2024",

    "3rd ECOWAS/ABWA Congress. Yamassoukro, Côte d'Ivoire. 2024",

    "Inauguration of ANAN Cote D'ivoire Branch. ANAN Cote D'Ivoire Branch, Côte d'Ivoire. December, 2023",

    "African Accounting and Finance Association (AAFA) Conference in Abuja, Dar Es Salaam, Dakar, Accra, Nairobi, Munyonyo, Kampala. (2012-2025)",

    "21st World Congress of Accountants (IFAC). Mumbai, India, November 2022",

    "CPA Ireland Leadership Training Institute of Certified Public Accountants Ireland in association with University College Cork and Irish Management Institute, Dublin, Ireland, May 2016",

    "E-Learning Training on Moodle and CISCO Webex, ICT University, Baton Rouge, Louisiana, USA, March 2013",

    "The International Center for Information Technology & Development (ICITD), Southern University, Baton Rouge, Louisiana, USA, Nov 2012",

    "African Congress of Accountants (ACOA). Nairobi, Maputo, Marakesh, Abidjan, Kigali (2019-2025)",

    "1st International Conference on Public Financial Management: Trust and Accountability in Public Financial Management, Chartered Institute of Public Finance and Accountancy, London, March 2011",

    "23rd XBRL International Conference: Enhancing Business Performance, XBRL (eXtensible Business Reporting Language) International Inc, Montreal, Canada, Oct 2011",
  ];

  const local_workshop = [
    "ANAN Mandatory Continuing Professional Development (MCPD) Programs. 1999-2025",

    "ANAN Mandatory Professional Practitioners Forum (MPPF) Programs. 2012-2025",

    "ANAN/CITN Joint Annual Council Retreat. ANAN/CITN, Abuja. 2023-2025",

    "Fundamentals of the Capital Market. Morewits Consulting, Abuja, 2017",

    "CPA Ireland Staff Training Programme. Institute of Certified Public Accountants in association with ANAN, Lagos, 2016",

    "IFRS for SMEs Train the Trainer Workshop. IFRS Foundation, ABWA, Trade & Investment, Lagos, 2014",

    "International Public Sector Accounting Standards (IPSAS). ANAN and CPA-Ireland, Keffi, 2014",

    "International Financial Reporting Standards (IFRS). ANAN and CPA-Ireland, Lagos, 2014",

    "National Transformation Through Effective Governance of ICT. ISACA, Lagos, 2013",

    "Forensic Accounting, Auditing and Investigations Train-The-Trainer. ANAN and ENS Forensic, Abuja, 2013",

    "Management Consultancy Skills. Development Centre for Management, Lagos, 2009",

    "Public Sector Financial Reporting: Issues and Challenges. Nigerian Accounting Standard Board, Kano, 2008",

    "Effective Information Management for Projecting Local Government Programmes and Activities in a Democratic System. Rechez Communications LTD & ANAN (Anambra State Branch), Awka, 2005",

    "Mandatory Continuing Professional Development (MCPD) Programme. ANAN Across Nigeria, 1999-2021",

    "Head, Accounting Team, National Board for Technical Education (NBTE) Re: Accreditation Panel to Rufus Giwa (Former Ondo State) Polytechnic, Owo, Ondo State, Nigeria, 2005",

    "Member, Accounting Team, National Board for Technical Education (NBTE) Re: Accreditation Panel to Federal Polytechnic, Bauchi, Bauchi State, Nigeria, 2008",

    "Member, Accounting Team, National Board for Technical Education (NBTE) Inspection of Facilities Panel to Uyo City Polytechnic, Uyo, Akwa Ibom State, Nigeria, 2013",

    "Member, FAAC Sub-Committee on IPSAS, Implementation Assessment of Nigeria's Level of IPSAS Adoption and Implementation, 2022",

    "Technical Adviser, Pan-African Federation of Accountants (PAFA) Governing Board, 2022-Date",

    "Technical Adviser, Accountancy Bodies of West Africa (ABWA) Governing Council, 2022-Date",

    "Member, Planning, Human Capital, and Finance Committee (PAFA), 2022-2023",

    "Member, Audit and Risk Committee (PAFA), 2023-Date",

    "Member, CEOs Forum, International Federation of Accountants (IFAC), 2019-Date",

    "Head of Delegation, ICPAU Visit to NCA, 2024",

    "Member, Governing Council, Federal Treasury Academy, Orozo, 2024",
  ];

  const acad_qualities = [
    ["Board of Governors, NCA", "Member", "April, 2022"],
    [
      "Nigerian College of Accountancy, Jos",
      "Director-General",
      "March, 2019-April, 2022",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Director of Studies",
      "2014-2019",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "College Secretary / Head of Administration",
      "May, 2013",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Director of Studies",
      "2011-2013",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Director, Student Affairs",
      "Sept, 2010",
    ],
    ["Nigerian College of Accountancy, Jos", "Director, ICT", "Nov, 2006"],
    [
      "Nigerian College of Accountancy, Jos",
      "Director of Studies",
      "2002-2024",
    ],
    [
      "Nigerian College of Accountancy, Jos",
      "Asst. Director of Studies",
      "1999",
    ],

    // Editorship of Academic Journal
    ["Accountancy News Journal", "Member, Editorial Board", "2001-2004"],
    ["Accountancy News Journal", "Secretary, Editorial Board", "2006-2010"],
  ];

  const community = [
    [
      "Secretary, Planning and Implementation Committee",
      "ANAN University, Kwall",
      "2020",
    ],
    [
      "Secretary, IFAC/DFID/ANAN Project Team on Upgrade of Students' Manuals",
      "ANAN",
      "2017",
    ],
    ["Coordinator, ANAN Study Manuals Preparation/Development", "ANAN", "2014"],
    [
      "Member, Board of Governors",
      "Nigerian College of Accountancy, Jos",
      "2007",
    ],
    [
      "Recorder, Board of Governors",
      "Nigerian College of Accountancy, Jos",
      "2011",
    ],
    [
      "Member, Management Team",
      "Nigerian College of Accountancy, Jos",
      "1998-2022",
    ],
    [
      "Chairman, Academic Board",
      "Nigerian College of Accountancy, Jos",
      "2002-2004",
    ],
    ["Chief Invigilator", "Nigerian College of Accountancy, Jos", "2005-2006"],
    [
      "Secretary-General",
      "Nigerian College of Accountancy Alumni Association",
      "2013-2015",
    ],
    [
      "Protem Secretary, Alumni Association",
      "Nigerian College of Accountancy",
      "2009-2013",
    ],
    [
      "Secretary, Central Planning Committee, 8th Convocation Ceremony",
      "Nigerian College of Accountancy",
      "2019",
    ],
    [
      "Secretary, Central Planning Committee, 7th Convocation Ceremony",
      "Nigerian College of Accountancy",
      "2017",
    ],
    [
      "Secretary, Central Planning Committee, 6th Convocation Ceremony",
      "Nigerian College of Accountancy",
      "2014",
    ],
    [
      "Secretary, Central Planning Committee, 5th Convocation Ceremony",
      "Nigerian College of Accountancy",
      "2013",
    ],
    [
      "Chairman, Protocol and Security Sub-Committee, 8th Convocation Ceremony",
      "Nigerian College of Accountancy",
      "2019",
    ],
    [
      "Chairman, Protocol and Security Sub-Committee, 7th Convocation Ceremony",
      "Nigerian College of Accountancy",
      "2017",
    ],
    [
      "Chairman, Protocol and Security Sub-Committee, 6th Convocation Ceremony",
      "Nigerian College of Accountancy",
      "2014",
    ],
    [
      "Chairman, Protocol Sub-Committee, 5th Convocation Ceremony",
      "Nigerian College of Accountancy",
      "2013",
    ],
    [
      "Chairman, Publicity Sub-Committee, 4th Convocation Ceremony",
      "Nigerian College of Accountancy",
      "2011",
    ],
    [
      "Chairman, Publicity Sub-Committee, 3rd Convocation Ceremony",
      "Nigerian College of Accountancy",
      "2009",
    ],
    [
      "Chairman, Protocol Sub-Committee, 2nd Convocation Ceremony",
      "Nigerian College of Accountancy",
      "2007",
    ],
    [
      "Chairman, Protocol Sub-Committee, 1st Convocation Ceremony",
      "Nigerian College of Accountancy",
      "2001",
    ],
    [
      "Chairman, Protocol Sub-Committee, Fundraising Committee for Nigerian College of Accountancy",
      "Association of National Accountants of Nigeria (ANAN)",
      "2007",
    ],
    [
      "Member/Secretary, Various Committees, Board of Governors",
      "Nigerian College of Accountancy, Jos",
      "2001",
    ],
    [
      "Desk Officer, International Association for Accounting Education and Research (IAAER) and eXtensible Business Reporting Language Inc. (XBRL)",
      "Association of National Accountants of Nigeria (ANAN)",
      "2010-2013",
    ],
    [
      "Chairman, Accountants-In-Training (AIT)/ICT Workshop Committee",
      "Association of National Accountants of Nigeria",
      "2012-2022",
    ],
  ];

  // a. Church Roles
  const church = [
    [
      "Chairman, Finance Management Committee",
      "Living Faith Church, Jos",
      "2007-2009",
    ],
    ["Chairman, Deacons' Board", "Living Faith Church, Jos", "2006-2007"],
    [
      "President, National Youth Ministry, Jos Chapter",
      "Living Faith Church Worldwide",
      "2006-2008",
    ],
    [
      "Chairman, Hospitality Service Group",
      "Living Faith Church, Jos",
      "2004-2006",
    ],
    ["Treasurer, Ordained Workers Forum", "Living Faith Church", "2004-2006"],
    [
      "Chairman, Project Committee",
      "Word of Faith Bible Institute, Jos Campus, August Special Leadership Diploma Course; Leadership Certificate Course and Basic Certificate Course",
      "2005",
    ],
  ];

  // b. Chieftaincy Titles
  const chieftaincy = [
    ["Dara Davou", "Vwang Chiefdom, Plateau State", "2022"],
    ["Boba Selu", "Ifegunwa, Osun State", "2022"],
    ["Aare Bobaseto", "Akure Kingdom, Ondo State", "2023"],
  ];

  // c. Community Service / Rotary Roles
  const rotary = [
    ["Assistant Governor", "Rotary International District 9127", "2024"],
    ["Vice President", "Rotary Club of Jos Central", "2025-2026"],
    [
      "Chair, Entertainment Committee",
      "District Learning Committee, Rotary District 9127",
      "2025",
    ],
    [
      "Chair, Venue Committee",
      "District Governor Investiture, Rotary District 9127",
      "2025",
    ],
    [
      "Member, District Learning Committee",
      "Rotary International 9127",
      "2024-2026",
    ],
    [
      "Chairman, Foundation Services",
      "Rotary Club of Jos Central",
      "2024-2025",
    ],
    [
      "District Chair, New Generation (Youth Service)",
      "Rotary International District 9127",
      "2024-2026",
    ],
    [
      "President of Presidents",
      "Rotary Clubs in Plateau State, Nigeria",
      "2023",
    ],
    ["President", "Rotary Club of Jos Central", "2023-2024"],
    ["President-Elect", "Rotary Club of Jos Central", "2022-2023"],
    [
      "Chairman, Project and Community Service",
      "Rotary Club of Jos Central",
      "2021-2023",
    ],
  ];

  const awards = [
    [
      "Meritorious Contribution to the Development and Advancement of Akure land",
      "The Deji and Paramount Ruler of Akure land",
      "2025",
    ],
    ["Honorary Membership", "Rotary Club of E-Golden Nigeria", "2025"],
    [
      "Professional Contribution in Humanity Accounting and Humanitarian Services",
      "The President HP Abonta, AG and PAG of Rotary Club of Abuja Kubwa",
      "2024",
    ],
    [
      "Rotary Award as SAPHIRE HERO",
      "Rotary District 9125 (2024 DISCON)",
      "2024",
    ],
    [
      "Humanitarian Personality Award",
      "RATTAWU, Plateau State Chapter",
      "2024",
    ],
    ["Impact Award of Productive Leadership", "Impact Media", "2024"],
    [
      "Award of Selfless Services to ANAN and Unique Leaderships Qualities",
      "Association of National Accountants of Nigeria",
      "2024",
    ],
    ["Award of Excellence", "Inner Wheel District 912, Nigeria", "2024"],
    ["Award of Appreciation", "Rotary District 9127", "2024"],
    [
      "Award of Recognition for Humanitarian Service",
      "St. Michael Model School B/Ladi",
      "2024",
    ],
    [
      "Award as Highest Foundation Donor (Cumulative 3 Position)",
      "Rotary District 9127",
      "2024",
    ],
    [
      "Award as Highest Foundation Donor (Polio Plus Fund 2 Position)",
      "Rotary District 9127",
      "2024",
    ],
    [
      "Award as Most Innovative Club President 2 Position",
      "Rotary District 9127",
      "2024",
    ],
    ["Man of the Year Award (Accounting Icon)", "Vanguard Newspapers", "2024"],
    ["Award of Excellence", "NUASA National Body", "2023"],
    ["Award of Excellence", "Rotary Club of Jos South", "2023"],
    ["Humanitarian Service Award", "Rotary International", "2023"],
    [
      "Award of Excellence",
      "Peoples' Chambers, Faculty of Law, University of Jos",
      "2023",
    ],
    ["Award of Excellence", "Rotary International, Jos Central", "2023"],
    [
      "Award of Humanitarian Service",
      "Rotary Alumni Association District 9125",
      "2023",
    ],
    ["Award of Vocational Excellence", "Rotary Club of Naraguta", "2023"],
    ["Award of Excellence", "Nigerian Icon Democracy Award (NiDA)", "2023"],
    [
      "Pan Nigerian Corporate Mandate Award",
      "Coalition of Ethnic Nationality Youth Leaders of Nigeria (CENYLON)",
      "2023",
    ],
    [
      "Integrity/Ambassadorial Award",
      "Nigerian Patriotic Youth Against Corruption & Transparency Initiative (NPYACPI)",
      "2023",
    ],
    [
      "Humanitarian and Human Capital Development Award",
      "Plateau Man of The Year Award",
      "2023",
    ],
    ["Award of Excellence", "South-West Youth Parliament", "2023"],
    ["Award of Excellence", "The Officials Nigerian Magazine", "2022"],
    ["Award of Excellence", "ANAN North-Central Zone", "2022"],
    [
      "Award of Social Impact/Human Capital Development",
      "Plateau Man of the Year Awards",
      "2022",
    ],
    [
      "Award of Excellence, Humanitarian Service",
      "Rotaract District 9125",
      "2022",
    ],
    [
      "Award of Recognition as Best New Rotarian of the year",
      "Rotary Club of Jos Central",
      "2021",
    ],
    ["Award of Vocational Excellence", "Rotary Club of Jos Central", "2021"],
    ["Hasken Matassan Arewa", "Arewa Youth Congress", "2020"],
    ["Vanguard of Quality Legacy of the Year", "Bbold Initiative", "2020"],
    [
      "National Patron",
      "National Association of Polytechnic Accounting Students (NAPAS)",
      "2020",
    ],
    [
      "Award of Excellence (Nomination into CITN Council Committee)",
      "",
      "2020",
    ],
    ["Award of Excellence", "Leagues of African Development Students", "2020"],
    [
      "Nelson Mandela African Patriotic Leader Award",
      "Trans-African Youth Initiative",
      "2020",
    ],
    [
      "Award of Excellence",
      "Nigerian Youth Liberation for Good Governance",
      "2020",
    ],
    [
      "Award of Excellence",
      "Council Member, African Accounting and Finance Association (AAFA) Board",
      "2020",
    ],
    [
      "Award of Excellence",
      "Association of Northern Nigerian Students",
      "2020",
    ],
    ["Award of Excellence", "Oodua Youth Parliament", "2020"],
    [
      "Most Committed Public Servant Award",
      "National Association of Nigerian Students, Zone 'C'",
      "2020",
    ],
    [
      "Award of Excellence",
      "National Youth Movement Against Corruption and Social Injustice",
      "2019",
    ],
    [
      "Award of Excellence",
      "Sir Ahmadu Bello Northern Youth Council of Nigeria",
      "2019",
    ],
    [
      "Award of Excellence",
      "West African Students Union Parliament Awards",
      "2019",
    ],
    ["Award of Excellence", "Young Women Congress of Nigeria", "2019"],
    ["Award of Excellence", "African Youth for Good Governance", "2019"],
    ["Award of Excellence", "ABU Post-Graduate Representative Council", "2019"],
    [
      "Award of Excellence",
      "Nelson Mandela Outstanding Leadership Honor",
      "2019",
    ],
    [
      "Award of Excellence",
      "National Youth Movement Against Corruption and Social Justice",
      "2019",
    ],
    ["Award of Excellence", "Pastor Charles Okojie", "2019"],
    [
      "Award of Excellence",
      "National Association of Nigerian Universities Students",
      "2019",
    ],
    [
      "Award of Excellence",
      "African Emerging Leadership, Research and Development Organization",
      "2019",
    ],
    [
      "Award of Excellence",
      "National Association of Nigerian Students",
      "2019",
    ],
    [
      "Award for Advancing the Science of Accountancy",
      "ANAN Ikeja Branch",
      "2018",
    ],
    ["Award as Accounting Trailblazer", "ANAN Plateau Branch", "2018"],
    [
      "Award of Recognition and Commitment",
      "African Accounting and Finance Association (AAFA)",
      "2018",
    ],
    [
      "Merit Award for Professional Ethics & Diligence",
      "Association of National Accountants (FCT1 Branch)",
      "2017",
    ],
    [
      "Distinguished Service Award for Outstanding Service",
      "Association of National Accountants of Nigeria (ANAN)",
      "2013",
    ],
    [
      "Commendation Award",
      "Association of National Accountants of Nigeria (ANAN)",
      "2012",
    ],
    [
      "Best Lecturer, 2016/2017",
      "Nigerian College of Accountancy, Jos",
      "2017",
    ],
    [
      "Best Lecturer, 2015/2016",
      "Nigerian College of Accountancy, Jos",
      "2016",
    ],
    [
      "Best Lecturer, 2014/2015",
      "Nigerian College of Accountancy, Jos",
      "2015",
    ],
    [
      "Best Lecturer, 2013/2014",
      "Nigerian College of Accountancy, Jos",
      "2014",
    ],
    [
      "Best Lecturer, 2012/2013",
      "Nigerian College of Accountancy, Jos",
      "2013",
    ],
    [
      "Honorary Mayor-President of the City of Baton Rouge, Parish of East Baton Rouge, Louisiana, USA",
      "Office of the Mayor-President of the City of Baton Rouge, Parish of East Baton Rouge, Louisiana, USA",
      "2012",
    ],
    [
      "Nigerian Merit Gold Award for Productivity",
      "Platinum Standard Publications Ltd Nigeria",
      "2012",
    ],
    [
      "Best Lecturer, 2011/2012",
      "Nigerian College of Accountancy, Jos",
      "2012",
    ],
    [
      "Best Lecturer, 2010/2011",
      "Nigerian College of Accountancy, Jos",
      "2011",
    ],
    [
      "2000 Outstanding Intellectuals of the 21st Century, 2nd Edition",
      "International Biographical Centre, Cambridge, England",
      "2003",
    ],
    [
      "21st Century Award for Achievement",
      "International Biographical Centre, Cambridge, England",
      "2003",
    ],
    [
      "Who's Who in the 21st Century – 2nd Edition",
      "International Biographical Centre, Cambridge, England",
      "2002",
    ],
    [
      "Order of Excellence",
      "International Biographical Centre, Cambridge, England",
      "2002",
    ],
  ];

  const teachingExperience = [
    ["ANAN University, Kwall", "Associate Professor", "Dec 2025"],
    ["ANAN University, Kwall", "Senior Lecturer", "Oct 2021 - Dec 2025"],
    ["Nigerian College of Accountancy, Jos", "Chief Lecturer", "2017"],
    ["Nigerian College of Accountancy, Jos", "Principal Lecturer", "2011"],
    ["Nigerian College of Accountancy, Jos", "Lecturer", "1998"],
    ["Nigerian College of Accountancy, Jos", "Part-Time Lecturer", "1997"],
  ];

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-tl-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-br-3xl -z-10" />
            <img
              src={ImageAsset.profile}
              alt="Our Team"
              className="rounded-lg shadow-2xl w-full object-fit"
            />
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
                Meet the Principal
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Dr. Kayode Olushola Fasua
              </h2>
              <p className="text-sm text-red-500">
                PhD · FCNA · FCTI · FTM · FCSA(USA) · FRCN · FNIM
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              An accomplished Accountant and seasoned Administrator with over 30
              years of experience in accountancy, information technology, and
              management sciences. Dr. Fasua served as CEO of the Association of
              National Accountants of Nigeria (ANAN) and Director-General of the
              Nigerian College of Accountancy (NCA).
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              He holds a PhD in Accounting & Finance, an MSc from Leeds Beckett
              University (UK), and an MBA, alongside numerous professional
              certifications in risk management, cybersecurity, and forensic
              accounting. A prolific academic, he has published over 20 journal
              articles and 9 books.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col bg-gray-50 pl-2 pt-1 pb-1"
                >
                  {/* <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" /> */}
                  <p className="text-sm text-primary">{feature.sub}</p>
                  <span className="font-medium text-foreground">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-7 gap-1">
              {qualifications.map((feature, idx) => (
                <div key={idx} className="flex bg-fg-card  p-1 text-sm">
                  <small className="text-white text-sm text-center">
                    {feature}
                  </small>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {show_container ? (
        <div className="container mx-auto mt-5 px-4">
          <div className="container mx-auto mt-5 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-fg-card mb-2">Education</h3>
              <ul className="list-disc list-inside">
                {education.map((item, index) => (
                  <li key={`item${index}`}>{item}</li>
                ))}
              </ul>
            </div>
            {/*  */}
            <div>
              <h3 className="font-bold text-fg-card mb-2">Certificate</h3>
              <ul className="list-disc list-inside">
                {qualifications.map((item, index) => (
                  <li key={`item${index}`}>{item}</li>
                ))}
              </ul>
            </div>
            {/*  */}
            <div>
              <h3 className="font-bold text-primary mb-2">Countries Visited</h3>
              <div className="divider"></div>
              <div className="grid grid-cols-3">
                {locations.map((item, index) => (
                  <div key={`country_${index}`}>
                    <h3 className="font-bold text-fg-card mb-2">
                      {item.country}
                    </h3>
                    <div className="mt-1.5">
                      {item.cities.map((itm, indx) => (
                        <p className="text-sx " key={`city-${indx}`}>
                          {itm}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*  */}

          <div className="mt-10">
            <TableComponent
              head={["Qualification", "Awarding Institution", "Date"]}
              content={qualification}
              title="ACADEMIC QUALIFICATIONS"
              classname="text-primary"
            />
          </div>

          <div className="mt-10">
            <TableComponent
              head={["Organization", "Position Held", "Date"]}
              content={institution}
              title="INSTITUTIONAL/INDUSTRIAL EXPERIENCE"
              classname="text-primary"
            />
          </div>

          <div className="mt-10">
            <TableComponent
              head={["Grade", "Professional Body", "Date"]}
              content={MEMBERSHIP}
              title="MEMBERSHIP OF PROFESSIONAL ASSOCIATIONS"
              classname="text-primary"
            />
          </div>

          <div className="mt-10">
            <TableComponent
              head={["Organization", "Position Held", "Date"]}
              content={teachingExperience}
              title="Teaching Experience"
              classname="text-primary"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
            {/* <PdfReader src={ImageAsset.cv} /> */}
            <ListComponent
              content={BookPublications}
              title="Book Publications"
              classname="text-primary"
            />
            <ListComponent
              content={journalPublications}
              title="Journal Publications: "
              classname="text-primary"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
            {/* <PdfReader src={ImageAsset.cv} /> */}
            <ListComponent
              content={academic_paper}
              title="ACADEMIC CONFERENCE PAPER"
              classname="text-primary"
            />
            <ListComponent
              content={workshop_paper}
              title="WORKSHOP PAPERS/PRESENTATIONS"
              classname="text-primary"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
            {/* <PdfReader src={ImageAsset.cv} /> */}
            <ListComponent
              content={international_workshop}
              title="INTERNATIONAL WORKSHOPS, TRAININGS, AND SEMINARS ATTENDED"
              classname="text-primary"
            />
            <ListComponent
              content={local_workshop}
              title="Local Workshops, Trainings, And Seminars Attended"
              classname="text-primary"
            />
          </div>

          {/* academic qualities */}

          <div className="mt-10">
            <TableComponent
              head={["Organization", "Possition Held", "Date"]}
              content={acad_qualities}
              title="ACADEMIC LEADERSHIPQUALITIES "
              classname="text-primary"
            />
          </div>

          <div className="mt-10">
            <TableComponent
              head={["Organization", "Possition Held", "Date"]}
              content={community}
              title="CONTRIBUTION TO THE COLLEGE/ UNIVERSITY"
              classname="text-primary"
            />
          </div>



          <div className="mt-10">
            <TableComponent
              head={["Organization", "Possition Held", "Date"]}
              content={church}
              title="CONTRIBUTION TO THE COMMUNITY - CHURCH"
              classname="text-primary"
            />
          </div>

          <div className="mt-10">
            <TableComponent
              head={["Organization", "Possition Held", "Date"]}
              content={chieftaincy}
              title="CONTRIBUTION TO THE COMMUNITY - CHIEFTAINCY"
              classname="text-primary"
            />
          </div>

          <div className="mt-10">
            <TableComponent
              head={["Organization", "Possition Held", "Date"]}
              content={rotary}
              title="CONTRIBUTION TO THE COMMUNITY - ROTARY"
              classname="text-primary"
            />
          </div>

          <div className="mt-10">
            <TableComponent
              head={[]}
              content={awards}
              title="AWARDS"
              classname="text-primary"
            />
          </div>

          {/*  */}
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
