import React from 'react';
import { Page, Text, Image, Font, Document, StyleSheet, PDFViewer, View } from '@react-pdf/renderer';
// Define the data for the table
// const data = [
//   { id: 1, name: 'John Doe', age: 30, city: 'New York' },
//   { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
//   { id: 3, name: 'Bob Johnson', age: 40, city: 'Chicago' },
// ];

const listItems = [
  { text: 'First point', style: {} },
  { text: 'Second point', style: { bold: true } },
  { text: 'Third point', style: { italic: true } },
  { text: 'Fourth point', style: { underline: true } },
];

const data = [
  {
    "name": "education",
    "institution": "Southeastern Louisiana University",
    "location": "City, State",
    "degree": "Bachelor of Science / Arts in Name of Major",
    "completionDate": "Month and Year Received/Expected",
    "concentration": "Concentration",
    "secondMajor": "Second Major , Minor , Emphasis",
    "gpa": "GPA:X.XX/4.00",
    "relatedCoursework": "Related Coursework",
    "studyAbroad": "Study Abroad (optional)"
  },
  {
    "company": [
      {
        "name": "relevantExperience",
        "companyName": "Name of Company",
        "location": "City, State",
        "jobTitle": "Job Title",
        "duration": "Month Year - Month Year",
        "bulletPoints": [
          "Include 3-5 bullet points demonstrating skills you have gained through this position that relate back to the job description. Emphasize accomplishments over day-to-day tasks.",
          "Place an action verb at the beginning of a bullet point statement to make the statement impactful.",
          "Use quantifiers such as numbers, money amounts, or percentages whenever possible."
        ]
      },
      {
        "name": "additionalExperience",
        "companyName": "Name of Company",
        "location": "City, State",
        "jobTitle": "Job Title",
        "duration": "Month Year - Month Year",
        "bulletPoints": [
          "Emphasize key skills that employers may want to see in your resume (sometimes found in job descriptions).",
          "Highlight your results and impact by reflecting on the purpose behind the action/task.",
          "Make sure to use past tense verbs to describe your experiences."
        ]
      },
    ]
  },
  {
    "name": "projectExperience",
    "projectName": "Name of Project",
    "location": "City, State",
    "courseName": "Name of Course",
    "duration": "Month Year - Month Year",
    "bulletPoints": [
      "Include 3-5 bullet points demonstrating skills you have gained through your project. Emphasize accomplishments over project tasks.",
      "Continue to place an action verb at the beginning of a bullet point statement to make the statement impactful.",
      "Feature a bullet point that describes your team collaboration and/or leadership skills if the project was within a group. If the project was a group project, note your specific contributions to the group."
    ]
  },
  {
    "name": "campusCommunityInvolvement",
    "title": "Your title (if applicable)",
    "organizationName": "Club/Organization Name",
    "duration": "Month Year - Month Year",
    "bulletPoints": [
      "As an option, add 2-3 bullet points to describe your role in the organization. Focus your contributions to the organization and quantify whenever possible.",
      "Similar to the experience sections, begin each bullet point with a strong action verb."
    ]
  }
  // ,
  // "skills": [
  //   "Skill 1",
  //   "Skill 2",
  //   "Skill 3",
  //   "Skill 4",
  //   "Skill 5",
  //   "Skill 6"
  // ],
  // "honorsAndAwards": [
  //   {
  //     "name": "Name of Honor/Award/Grant",
  //     "date": "Month and Year Given"
  //   }
  // ]
]


// Resume data
// Function to draw a horizontal line
const HorizontalLine = () => (
  <View style={styles.hr}>
    <View style={{ borderBottomWidth: 1, borderBottomColor: 'black' }} />
  </View>
);
console.log(data[0].name)
const ReactPdf = ({ getUserInfo }) => (


  <div className={`pdf-viewer-container`} style={{
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto'
  }}>
    <PDFViewer>
      <Document>
        <Page style={styles.body}>

          <Text style={styles.title}>{getUserInfo[0].name}</Text>
          <Text style={styles.author}>•{getUserInfo[0].professionalEmailAddress}•{getUserInfo[0].phoneNumber}•{getUserInfo[0].portfolioLink}•{getUserInfo[0].websiteOrLinkedInAddress}</Text>
          {/* Render education section */}
          <Text style={styles.titleLeft}>Education:</Text>
          <HorizontalLine />
          <View style={styles.container}>
            <Text style={[styles.textLeft, styles.bolder, styles.base]}>{getUserInfo[1].institution}</Text>
            <Text style={styles.textRight}>{getUserInfo[1].location}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.textLeft}>{getUserInfo[1].degree}</Text>
            <Text style={styles.textRight}>{getUserInfo[1].completionDate}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.textLeft}>{getUserInfo[1].secondMajor}</Text>
            <Text style={styles.textRight}>{getUserInfo[1].gpa}</Text>
          </View>
          <Text style={styles.container}>{getUserInfo[1].relatedCoursework}</Text>
          <Text style={styles.container}>{getUserInfo[1].studyAbroad}</Text>


          {/* Render relevantExperience section */}
        
          {Array.isArray(getUserInfo[2].company) && getUserInfo[2].company.map((value, i) => (
    <View key={i}>
        <Text>{` ${value.name}`}</Text>
        <HorizontalLine />
        <View style={styles.container}>
            <Text style={styles.textLeft}>{value.companyName}</Text>
            <Text style={styles.textRight}>{value.location}</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.textLeft}>{value.jobTitle}</Text>
            <Text style={styles.textRight}>{value.duration}</Text>
        </View>
        <View style={styles.min}>
            {value.bulletPoints.map((v, index) => (
                <Text key={index}>
                    <Text style={styles.bullet}>{`\u2022`}</Text>
                    <Text>{v}</Text>
                </Text>
            ))}
        </View>
    </View>
))}


{/* <View key={i}>
                <Text >{` ${value.name}`}</Text>
                <HorizontalLine />
                <View style={styles.container}>
                  <Text style={styles.textLeft}>{value.companyName || value.projectName || value.organizationName}</Text>
                  <Text style={styles.textRight}>{value.location}</Text>
                </View>
                <View style={styles.container}>
                  <Text style={styles.textLeft}>{value.jobTitle||value.courseName||value.title}</Text>
                  <Text style={styles.textRight}>{value.duration}</Text>
                </View>
                <View style={styles.min}>{value.bulletPoints.map((v,index)=>(
                  <Text key={index}><Text style={styles.bullet} >{`\u2022`}</Text>
                  <Text >{v}</Text></Text>
                  ))}
                </View>
              </View> */}

              {/* Render additionalExperience section */}
              {/* <Text style={styles.title}>Additional Experience:</Text>
        {Object.entries(data.additionalExperience).map(([key, value], i) => (
          <Text key={i}>{`${key}: ${value}`}</Text>
        ))} */}

              {/* Render projectExperience section */}
              {/* <Text style={styles.title}>Project Experience:</Text>
        {Object.entries(data.projectExperience).map(([key, value], i) => (
          <Text key={i}>{`${key}: ${value}`}</Text>
        ))} */}

              {/* Render campusCommunityInvolvement section */}
              {/* <Text style={styles.title}>Campus Community Involvement:</Text>
        {Object.entries(data.campusCommunityInvolvement).map(([key, value], i) => (
          <Text key={i}>{`${key}: ${value}`}</Text>
        ))} */}

              {/* Render skills section */}
              {/* <Text style={styles.title}>Skills:</Text>
        {data.skills.map((skill, i) => (
          <Text key={i}>{skill}</Text>
        ))} */}

              {/* Render honorsAndAwards section */}
              {/* <Text style={styles.title}>Honors and Awards:</Text>
        {data.honorsAndAwards.map((award, i) => (
          <Text key={i}>{`Name: ${award.name}, Date: ${award.date}`}</Text>
        ))} */}
              {/* <Image
            style={styles.image}
            src={getUserProfile}
          /> */}
              {/* <Text style={styles.subtitle}>
            Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
            Quijote de la Mancha
          </Text> */}
              {/* <View style={styles.section}>
            <View style={styles.table}>
         
              <View style={styles.tableRow}>
                <View style={[styles.tableCell, styles.headerCell]}>
                  <Text>ID</Text>
                </View>
                <View style={[styles.tableCell, styles.headerCell]}>
                  <Text>Name</Text>
                </View>
                <View style={[styles.tableCell, styles.headerCell]}>
                  <Text>Age</Text>
                </View>
                <View style={[styles.tableCell, styles.headerCell]}>
                  <Text>City</Text>
                </View>
              </View>
   
              {data.map(item => (
                <View key={item.id} style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text>{item.id}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text>{item.name}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text>{item.age}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text>{item.city}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View> */}
              {/* <Text style={styles.section} >
        {listItems.map((item, index) => (
          <Text key={index} style={styles.listItem} >
            <Text style={styles.bullet} >{`\u2022`}</Text>
            <Text style={styles.listItemText}>{item.text}</Text>
            {'\n'} 
          </Text>
        ))}
      </Text> */}
              {/* <Text style={styles.text}>
            En resolución, él se enfrascó tanto en su lectura, que se le pasaban las
            noches leyendo de claro en claro, y los días de turbio en turbio, y así,
            del poco dormir y del mucho leer, se le secó el cerebro, de manera que
            vino a perder el juicio. Llenósele la fantasía de todo aquello que leía
            en los libros, así de encantamientos, como de pendencias, batallas,
            desafíos, heridas, requiebros, amores, tormentas y disparates
            imposibles, y asentósele de tal modo en la imaginación que era verdad
            toda aquella máquina de aquellas soñadas invenciones que leía, que para
            él no había otra historia más cierta en el mundo.
          </Text> */}

              <Image
                style={styles.image}
                src="/images/quijote2.png"
              />




              <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
              )} fixed />
            </Page>
      </Document>
    </PDFViewer>
  </div>
);

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: '20pt',
    textAlign: 'center',
    fontWeight: 'heavy',

    // fontFamily: 'Roboto'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: '8px'
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
    height: '50px',
    width: '50px'
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  // section: {
  //   margin: 10,
  //   padding: 10,
  //   flexGrow: 1,
  // },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomColor: '#bfbfbf',
    borderBottomWidth: 1,
  },
  tableCell: {
    padding: 5,
    flex: 1, // Equal width for all columns
    borderRightColor: '#bfbfbf',
    borderRightWidth: 1,
  },
  headerCell: {
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
    textTransform: 'uppercase',
  },
  section: {
    // margin: 10,
    // padding: 10,
    // flexGrow: 1 
  },
  listItem: {
    flexDirection: 'row', // Adjusted flexDirection
    alignItems: 'center', // Align items in the center vertically
    marginBottom: 5,
  },
  bullet: {
    width: 10,
    fontSize: 15,
    // paddingTop: 25,
    marginTop: 10,
    paddingRight: 30
  },
  listItemText: {
    fontSize: 12,
    marginBottom: 5
  },
  min:{
    fontSize: 10
  },
  base: {
    fontSize: 13
  },
  bolder: {
    fontWeight: 'heavy'
  },
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'
  },
  underline: {
    textDecoration: 'underline'
  },
  titleLeft: {
    textAlign: 'left',
    margin: '10 0 5 0'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 10
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
});

export default ReactPdf
