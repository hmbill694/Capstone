<template>
  <v-container class="white">
    <div id="page-container">
      <div id="header-wrapper" class="resume-section">
        <h1 class="header-font">{{ resumeInfo.personalInformation.fullName }}</h1>
        <h4 class="subheader-font">{{ resumeInfo.personalInformation.position }}</h4>
        <p class="body-font">{{ resumeInfo.personalInformation.description }}</p>
      </div>
      <!--End of header-wrapper-->
      <div id="divider-bar">
        <ul id="divider-list" class="horizontal-list">
          <li v-for="value in resumeInfo.contactInformation" :key="value" class="list-item">
            <i class="fas fa-address-card"></i>
            &nbsp;
            <a class="list-item-tag">{{ value }}</a>
          </li>
        </ul>
      </div>
      <!--End of divider-bar-->
      <div id="body-wrapper" class="resume-section">
        <h3 class="body-section-title">&nbsp;Skills</h3>
        <div id="skills-section" class="body-group">
          <ul v-for="col in resumeInfo.skills" :key="col.col" class="skills-list vertical-list">
            <li v-for="entry in col.values" :key="entry" class="list-item">{{ entry }}</li>
          </ul>
        </div>
        <!-- End skills-section -->
        <div class="spaced"></div>
        <h3 class="body-section-title">&nbsp;Work History</h3>
        <div class="spaced-larger"></div>
        <div id="work-section">
          <div
            v-for="item in resumeInfo.workHistory"
            :key="item.datesThere"
            class="work-group spaced-larger"
          >
            <h4 class="job-title">&mdash;&nbsp;{{ item.title }}</h4>
            <h4 class="job-loc spaced">{{ item.companyName }}</h4>
            <div class="date-loc-row">
              <h6>{{ item.datesThere }}</h6>
              <h6>{{ item.location }}</h6>
            </div>
            <!-- End of date-loc-row -->
            <ul class="work-list">
              <li v-for="duty in item.duties" :key="duty">
                <p class="body-font">{{ duty }}</p>
              </li>
            </ul>
          </div>
          <!-- End of work-group -->
        </div>
        <!-- End of work section -->
        <h3 class="body-section-title">&nbsp;Education</h3>
        <div id="education-section" class="body-group">
          <div v-for="item in resumeInfo.education" :key="item.datesAttended" class="edu-group">
            <h5 class="degree-title">{{ item.degreeName }}</h5>
            <h5 class="school-name">&nbsp;&nbsp;{{ item.institutionName }}</h5>
            <h5 class="years-attended">&nbsp;&nbsp;{{ item.datesAttended }}</h5>
          </div>
        </div>
        <!-- End of Education Section -->
        <h3 class="body-section-title">&nbsp;Organizations</h3>
        <div id="orgs-section" class="body-group">
          <div class="inset-container">
            <ul id="org-list" class="horizontal-list-grow-right">
              <li
                v-for="item in resumeInfo.organizations"
                :key="item.orgName"
                class="org-item no-style-item"
              >
                <div class="org-group">
                  <h5 class="org-title">{{item.orgName}}</h5>
                  <h6 class="membership-dates">{{item.membershipDates}}</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- End of org Section -->
        <h3 class="body-section-title">&nbsp;Languages</h3>
        <div id="language-section" class="body-group">
          <div class="inset-container">
            <ul id="language-list" class="horizontal-list-grow-right">
              <li v-for="item in resumeInfo.languages"
                :key="item.language" class="language-item no-style-item">
                <div class="language-group">
                  <h5 class="language-name">{{ item.language }}</h5>
                  <h6 class="level-fluency">{{ item.skillLevel }}</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- End of language Section -->
      </div>
      <!-- End body-wrapper -->
    </div>
    <!--End of page-container-->
  </v-container>
</template>

<script>
export default {
  name: 'SimpleResume',
  props: {
    resumeInfo: Object
  }
}
</script>

<style scoped>
@import "../css/simpleResume.css";
</style>
