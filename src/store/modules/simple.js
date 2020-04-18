export default {
  namespaced: true,
  state: {
    navContent: [
      {
        text: 'Personal Info',
        description: 'Give your name, last position and description!',
        route: '/resume-builder/personal'
      },
      {
        text: 'Contact Info',
        description: 'Give information for employers to contact you.',
        route: '/resume-builder/contact'
      },
      {
        text: 'Skills',
        description: 'List your skills to help catch their eye!',
        route: '/resume-builder/skills'
      },
      {
        text: 'Work History',
        description: 'Present prior work experiance related to the field',
        route: '/resume-builder/work-history'
      },
      {
        text: 'Education',
        description: 'Tell them where you learned what you know.',
        route: '/resume-builder/education'
      },
      {
        text: 'Organizations',
        description: "It's about who you know, right?",
        route: '/resume-builder/orgs'
      },
      {
        text: 'Langauges',
        description: 'Knowing another language is always good',
        route: '/resume-builder/lang'
      }
    ],
    openerFields: [
      {
        fieldName: 'Full Name',
        fieldType: 'v-text-field'
      },
      {
        fieldName: 'Postion',
        fieldType: 'v-text-field'
      },
      {
        fieldName: 'Description',
        fieldType: 'v-textarea'
      }
    ],
    resumeInfo: {
      fullName: 'John Roe',
      position: 'Business Development Manager',
      description:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim necessitatibus veritatis excepturi quisquam veniam? 
        Odit illum quia vitae consequatur fugit`,
      dividerBar: {
        email: 'JaneRoe@gmail.com',
        phone: '555-555-5555',
        Address: '1234 Main St., Phoenix, AZ'
      },
      skills: [
        ['SEO', 'Email Marketing', 'Descison Making'],
        ['Public Speaking', 'Research & Strategy', 'Google Analytics'],
        ['Negotiation', 'Emotional Intelligence', 'Sales'],
        ['Teamwork', 'Outbound Marketing', 'Social Media Advertising']
      ],
      workHistory: [
        {
          title: 'Frontend Developer',
          companyInfo: {
            name: 'Small DevShop Inc.',
            datesThere: '03/2017 - 08/2018',
            location: 'New York, New York'
          }
        },
        {
          title: 'Frontend Developer',
          companyInfo: {
            name: 'Small DevShop Inc.',
            datesThere: '03/2017 - 08/2018',
            location: 'New York, New York'
          }
        }
      ],
      education: [
        {
          degree: 'BS. Computer Science',
          schoolName: 'Arizona State Universtiy',
          datesThere: '03/2017 - 08/2018'
        }
      ],
      organizations: [
        {
          name: 'Dev\'s united',
          membershipDate: '2015 - Present'
        },
        {
          name: 'Dev\'s united',
          membershipDate: '2015 - Present'
        },
        {
          name: 'Dev\'s united',
          membershipDate: '2015 - Present'
        }
      ],
      langauges: [
        {
          name: 'Spanish',
          fluencyRating: 'Good'
        },
        {
          name: 'Spanish',
          fluencyRating: 'Good'
        },
        {
          name: 'Spanish',
          fluencyRating: 'Good'
        }
      ]
    }
  },
  mutations: {
    changeStateValue (state, payload) {
      console.log(state, payload)
      state.resumeInfo[payload.camelizedKeyName] = payload.value
      console.log(state.resumeInfo[payload.camelizedKeyName])
    }
  },
  actions: {
    alterResumeState ({ commit }, payload) {
      commit('changeStateValue', payload)
    }
  }
}
