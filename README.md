# FAFSA Timeline Generator

An interactive educational tool designed to help students create personalized FAFSA timelines with key deadlines and milestones for college financial aid applications.

## 📋 Overview

This project is an interactive web application that generates customized FAFSA timelines based on student type, academic year, and special circumstances. Users can input their personal information and receive a tailored timeline with important deadlines, priority dates, and actionable steps.

### Try it out

[Try FASFA Timeline Generator (Online Link)](https://thiinkmg.github.io/FASFA-Timeline-Generator/)

---

## ✨ Features

- **Personalized Timeline Generation**: Creates custom timelines based on student type and academic year
- **Interactive Input Form**: Easy-to-use form for student information and special circumstances
- **Visual Timeline Display**: Beautiful, easy-to-read timeline with color-coded priority levels
- **PDF Export**: Download personalized timeline as a professional PDF document
- **Template Download**: Access blank timeline template for offline planning
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Auto-save Functionality**: Progress is automatically saved in browser storage
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Special Circumstances Support**: Handles complex family situations and special cases

## 🎯 Educational Value

The timeline generator covers essential FAFSA planning topics including:
- Federal FAFSA opening dates and deadlines
- State-specific financial aid deadlines
- College priority deadlines for institutional aid
- Tax document preparation timelines
- Award letter arrival dates
- National Decision Day deadlines
- Special circumstances considerations

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start creating your personalized timeline immediately!

### Usage
1. **Personalize Your Timeline**: Enter your name, academic year, student type, and state
2. **Check Special Circumstances**: Select any applicable special circumstances
3. **Generate Timeline**: Click "Generate Timeline" to create your personalized timeline
4. **Review Your Timeline**: Review the visual timeline with color-coded priorities
5. **Export Results**: Download your timeline as a PDF for future reference

## 🛠️ Technical Details

### Built With
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks required
- **jsPDF**: Client-side PDF generation
- **Local Storage**: Automatic progress saving

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full feature experience with hover effects
- **Tablet**: Touch-friendly interface with adapted layouts
- **Mobile**: Streamlined design for smaller screens

## 🎨 Customization

The application uses CSS custom properties (variables) for easy theming:
- Brand colors can be modified in the `:root` selector
- Dark mode colors are defined in the `.dark-mode` class
- All transitions and animations can be customized

## 📊 Timeline Data Structure

The timeline data is stored in a JavaScript object with the following structure:
```javascript
{
    'academic-year': {
        'student-type': [
            {
                date: string,
                title: string,
                description: string,
                type: 'deadline' | 'priority' | 'optional',
                priority: boolean
            }
        ]
    }
}
```

## 🔧 Development

### Local Development
1. Clone the repository
2. Open `index.html` in your browser
3. Make changes to the code
4. Refresh the browser to see changes

### Adding New Timeline Items
To add new timeline items:
1. Add new objects to the appropriate timeline array in the JavaScript section
2. Follow the existing data structure format
3. The application will automatically include the new timeline item

### Adding New Academic Years
To add support for new academic years:
1. Add a new year key to the `timelineData` object
2. Include timeline arrays for each student type
3. Update the academic year dropdown options

## 📄 PDF Export Features

The application includes two PDF export options:
1. **Personalized Timeline PDF**: Complete timeline with student information and custom dates
2. **Template PDF**: Blank timeline template for offline use

## 🎓 Educational Use Cases

Perfect for:
- **High School Students**: Planning their FAFSA application timeline
- **Current College Students**: Renewing their FAFSA each year
- **Parents**: Understanding the FAFSA process and deadlines
- **Financial Aid Counselors**: Educational tool for workshops and counseling
- **Community Organizations**: Financial literacy programs and workshops
- **High School Counselors**: Helping students plan their college financial aid timeline

## 🎯 Student Types Supported

- **High School Students**: First-time FAFSA applicants
- **Current College Students**: Renewing FAFSA applications
- **Graduate Students**: Advanced degree financial aid planning
- **Adult Learners**: Non-traditional student financial aid

## 🏛️ Special Circumstances Handled

- **Divorced/Separated Parents**: Complex family situations
- **Remarried Parent**: Stepparent income considerations
- **Independent Student Status**: Special dependency considerations
- **Special Circumstances**: Job loss, medical expenses, natural disasters

## 📅 Timeline Categories

- **Deadlines**: Critical dates that cannot be missed
- **Priority Dates**: Important dates for maximum aid consideration
- **Optional**: Helpful dates for planning and preparation

## 🔧 Advanced Features

### Auto-save Functionality
- All form inputs are automatically saved to localStorage
- Timeline data persists between browser sessions
- No data loss if browser is closed accidentally

### Responsive Timeline Display
- Visual timeline with color-coded priority levels
- Hover effects for better user interaction
- Mobile-optimized layout for smaller screens

### PDF Generation
- Professional PDF layout with MCF branding
- Personalized content based on user input
- Print-ready format for physical copies

## 🤝 Contributing

We welcome contributions to improve this educational tool:
1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

## 📞 Support

For questions or support, please contact:
- [**My College Finance Technical Feedback Form**](https://docs.google.com/forms/d/e/1FAIpQLScyBwnqiz1L3ZOxV3C4f40jsOAW-YCw8xxfoBhPg2mgORshFA/viewform)

## 📜 License

© 2025 My College Finance. All rights reserved.

## 🙏 Acknowledgments

**Created by**: [Thiink Media Graphics](https://www.thiinkmediagraphics.com/)  
**In partnership with**: [My College Finance](https://www.mycollegefinance.com/)

## 🔗 Related Resources

- [FAFSA Interactive Research Web Report](https://my-college-finance.github.io/FAFSA-Interactive-Research-Web-Report/)
- [My College Finance Main Website](https://www.mycollegefinance.com/)
- [FAFSA Official Website](https://studentaid.gov/h/apply-for-aid/fafsa)

---

*This educational tool is designed to help students and families create effective FAFSA application timelines. Always consult with financial aid professionals for personalized advice and verify deadlines with your specific colleges and state agencies.*
