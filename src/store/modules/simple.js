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
        route: '/resume-builder/work'
      },
      {
        text: 'Education',
        description: 'Tell them where you learned what you know.',
        route: '/resume-builder/education'
      },
      {
        text: 'Organizations',
        description: "It's about who you know, right?",
        route: '/resume-builder/organization'
      },
      {
        text: 'Langauges',
        description: 'Knowing another language is always good',
        route: '/resume-builder/languages'
      }
    ],
    openerFields: [
      {
        col: 12,
        fieldName: 'Full Name',
        fieldType: 'v-text-field'
      },
      {
        col: 12,
        fieldName: 'Position',
        fieldType: 'v-text-field'
      },
      {
        col: 12,
        fieldName: 'Description',
        fieldType: 'v-textarea'
      }
    ],
    contactFields: [
      {
        col: 12,
        fieldName: 'Email',
        fieldType: 'v-text-field'
      },
      {
        col: 12,
        fieldName: 'Phone Number',
        fieldType: 'v-text-field'
      },
      {
        col: 12,
        fieldName: 'Address',
        fieldType: 'v-text-field'
      }
    ],
    skillsFields: [
      {
        col: 12,
        fieldName: '',
        fieldType: 'v-radio-group',
        radioBtns: [
          {
            label: '1',
            value: 1
          },
          {
            label: '2',
            value: 2
          },
          {
            label: '3',
            value: 3
          },
          {
            label: '4',
            value: 4
          }
        ]
      },
      {
        col: 12,
        fieldName: 'Skills',
        fieldType: 'v-textarea'
      }
    ],
    workFields: [
      {
        col: 6,
        fieldName: 'Title',
        fieldType: 'v-text-field'
      },
      {
        col: 6,
        fieldName: 'Company Name',
        fieldType: 'v-text-field'
      },
      {
        col: 6,
        fieldName: 'Location',
        fieldType: 'v-text-field'
      },
      {
        col: 6,
        fieldName: 'Dates There',
        fieldType: 'v-text-field'
      },
      {
        col: 12,
        fieldName: 'Duties',
        fieldType: 'v-textarea'
      },
      {
        col: 'n',
        fieldName: 'Remove Last Job',
        fieldType: 'v-btn',
        color: 'red'
      },
      {
        col: 'n',
        fieldName: 'Add Job',
        fieldType: 'v-btn',
        color: 'green'
      }

    ],
    educationFields: [
      {
        col: 12,
        fieldName: 'Degree Name',
        fieldType: 'v-text-field'
      },
      {
        col: 12,
        fieldName: 'Institution Name',
        fieldType: 'v-text-field'
      },
      {
        col: 12,
        fieldName: 'Dates Attended',
        fieldType: 'v-text-field'
      },
      {
        col: 'n',
        fieldName: 'Remove Last Entry',
        fieldType: 'v-btn',
        color: 'red'
      },
      {
        col: 'n',
        fieldName: 'Add',
        fieldType: 'v-btn',
        color: 'green'
      }

    ],
    organizationFields: [
      {
        col: 12,
        fieldName: 'Org Name',
        fieldType: 'v-text-field'
      },
      {
        col: 12,
        fieldName: 'Membership Dates',
        fieldType: 'v-text-field'
      },
      {
        col: 'n',
        fieldName: 'Remove Last Entry',
        fieldType: 'v-btn',
        color: 'red'
      },
      {
        col: 'n',
        fieldName: 'Add',
        fieldType: 'v-btn',
        color: 'green'
      }

    ],
    languageFields: [
      {
        col: 12,
        fieldName: 'Language',
        fieldType: 'v-text-field'
      },
      {
        col: 12,
        fieldName: 'Skill Level',
        fieldType: 'v-text-field'
      },
      {
        col: 'n',
        fieldName: 'Remove Last Entry',
        fieldType: 'v-btn',
        color: 'red'
      },
      {
        col: 'n',
        fieldName: 'Add',
        fieldType: 'v-btn',
        color: 'green'
      }

    ],
    resumeInfo: {
      personalInformation: {
        fullName: 'John Roe',
        position: 'Business  Manager',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Enim necessitatibus veritatis excepturi quisquam veniam? 
        Odit illum quia vitae consequatur fugit`
      },
      contactInformation: {
        email: 'JaneRoe@gmail.com',
        phoneNumber: '555-555-5555',
        address: '1234 Main St., Phoenix, AZ'
      },
      skills: [
        {
          col: 1,
          values: ['SEO', 'Email Marketing', 'Descison Making']
        },
        {
          col: 2,
          values: ['Public Speaking', 'Research & Strategy', 'Google Analytics']
        },
        {
          col: 3,
          values: ['Negotiation', 'Emotional Intelligence', 'Sales']
        },
        {
          col: 4,
          values: ['Teamwork', 'Outbound Marketing', 'Social Media Advertising']
        }
      ],
      workHistory: [
        {
          title: 'Frontend Developer',
          companyName: 'Small DevShop Inc.',
          datesThere: '03/2017 - 08/2018',
          location: 'New York, New York',
          duties: [
            `Lorem ipsum dolor sit amet gconsectetur adipisicing elit. 
                    Unde ut ex quam harum porro tempore in
                    veritatis sunt temporfibus maiores.`,
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Unde ut ex quam harum porro tempore in
                    veritatis sunt temporibus maiores.`,
            `Lorem ipsum dolor sit amet consecstetur adipisicing elit. 
                   Unde ut ex quam harum porro tempore in
                   veritatis sunt temporibus maiores.`
          ]
        },
        {
          title: 'Backend Developer',
          companyName: 'Small DevShop Inc.',
          datesThere: '03/2014 - 03/2017',
          location: 'Atlanta, Georgia',
          duties: [
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Unde ut ex quam harum porro tempore in
                    veritatis sunt tempmorlibus maiores.`,
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Unde ut ex quam harum porro tempore in
                    veritatis sunt temporibus maiores.`,
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Unde ut ex quam harumd porro tempore in
                   veritatis sunt temporibus maiores.`
          ]
        }
      ],
      education: [
        {
          degreeName: 'BS. Computer Science',
          institutionName: 'Arizona State Universtiy',
          datesAttended: '03/2017 - 08/2018'
        }
      ],
      organizations: [
        {
          orgName: "Dev's united",
          membershipDates: '2015 - Present'
        },
        {
          orgName: "Dev's united",
          membershipDates: '2015 - Present'
        },
        {
          orgName: "Dev's united",
          membershipDates: '2015 - Present'
        }
      ],
      languages: [
        {
          language: 'Spanish',
          skillLevel: 'Good'
        },
        {
          language: 'finish',
          skillLevel: 'Good'
        },
        {
          language: 'russian',
          skillLevel: 'Good'
        }
      ]
    }
  },
  mutations: {
    changeStateValue (state, payload) {
      if (payload.camelizedNameKey.length !== 0) {
        state.resumeInfo[payload.section][payload.camelizedNameKey] =
          payload.value
      } else {
        state.resumeInfo[payload.section] = payload.value
      }
    },
    appendToState (state, payload) {
      state.resumeInfo[payload.section].push(payload.value)
    },
    clearStateArray (state, payload) {
      state.resumeInfo[payload.section] = []
    },
    removeLastFromState (state, payload) {
      state.resumeInfo[payload.section].pop()
    }
  },
  actions: {
    alterResumeState ({ commit }, payload) {
      commit('changeStateValue', payload)
    },
    addToArrayStated ({ commit }, payload) {
      commit('appendToState', payload)
    },
    clearState ({ commit }, payload) {
      commit('clearStateArray', payload)
    },
    removeFromStateArray ({ commit }, payload) {
      commit('removeLastFromState', payload)
    }
  }
}
