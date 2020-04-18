<template>
  <v-container class="white">
    <div id="page-container">
      <div id="header-wrapper" class="resume-section">
        <h1 class="header-font">{{ resumeInfo.fullName }}</h1>
        <h4 class="subheader-font">{{ resumeInfo.lastPostition }}</h4>
        <p class="body-font">
          {{ resumeInfo.description }}
        </p>
      </div>
      <!--End of header-wrapper-->
      <div id="divider-bar">
        <ul id="divider-list" class="horizontal-list">
          <li v-for="value in resumeInfo.dividerBar" :key="value" class="list-item">
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
          <ul class="skills-list vertical-list">
            <li class="list-item">SEO</li>
            <li class="list-item">Email Marketing</li>
            <li class="list-item">Decison Making</li>
          </ul>
          <ul class="skills-list vertical-list">
            <li class="list-item">Public Speaking</li>
            <li class="list-item">Research & Strategy</li>
            <li class="list-item">Google Analytics</li>
          </ul>
          <ul class="skills-list vertical-list">
            <li class="list-item">Negotiation</li>
            <li class="list-item">Emotional Intelligence</li>
            <li class="list-item">Sales</li>
          </ul>
          <ul class="skills-list vertical-list">
            <li class="list-item">Teamwork</li>
            <li class="list-item">Outbound Marketing</li>
            <li class="list-item">Social Media Advertising</li>
          </ul>
        </div>
        <!-- End skills-section -->
        <div class="spaced"></div>
        <h3 class="body-section-title">&nbsp;Work History</h3>
        <div class="spaced-larger"></div>
        <div id="work-section">
          <div class="work-group spaced-larger">
            <h4 class="job-title">&mdash;&nbsp;Frontend-Developer</h4>
            <h4 class="job-loc spaced">Small Devshop inc.</h4>
            <div class="date-loc-row">
              <h6>03/2017 - 08/2018</h6>
              <h6>New York, New York</h6>
            </div>
            <!-- End of date-loc-row -->
            <ul class="work-list">
              <li>
                <p class="body-font">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ex quam harum porro tempore in
                  veritatis sunt temporibus maiores.
                </p>
              </li>
              <li>
                <p class="body-font">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ex quam harum porro tempore in
                  veritatis sunt temporibus maiores.
                </p>
              </li>
              <li>
                <p class="body-font">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ex quam harum porro tempore in
                  veritatis sunt temporibus maiores.
                </p>
              </li>
            </ul>
          </div>
          <!-- End of work-group -->
          <div class="work-group spaced-larger">
            <h4 class="job-title">&mdash;&nbsp;Frontend-Developer</h4>
            <h4 class="job-loc spaced">Small Devshop inc.</h4>
            <div class="date-loc-row">
              <h6>03/2017 - 08/2018</h6>
              <h6>New York, New York</h6>
            </div>
            <!-- End of date-loc-row -->
            <ul class="work-list">
              <li >
                <p class="body-font">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ex quam harum porro tempore in
                  veritatis sunt temporibus maiores.
                </p>
              </li>
              <li >
                <p class="body-font">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ex quam harum porro tempore in
                  veritatis sunt temporibus maiores.
                </p>
              </li>
              <li >
                <p class="body-font">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut ex quam harum porro tempore in
                  veritatis sunt temporibus maiores.
                </p>
              </li>
            </ul>
          </div>
          <!-- End of work-group -->
        </div>
        <!-- End of work section -->
        <h3 class="body-section-title">&nbsp;Education</h3>
        <div id="education-section" class="body-group">
          <div class="edu-group">
            <h5 class="degree-title">&bull;&nbsp;BS. Computer Science</h5>
            <h5 class="school-name">&nbsp;&nbsp;Arizona State University</h5>
            <h5 class="years-attended">&nbsp;&nbsp;5/5/14 - 5/5/18</h5>
          </div>
        </div>
        <!-- End of Education Section -->
        <h3 class="body-section-title">&nbsp;Organizations</h3>
        <div id="orgs-section" class="body-group">
          <div class="inset-container">
            <ul id="org-list" class="horizontal-list-grow-right">
              <li class="org-item no-style-item">
                <div class="org-group">
                  <h5 class="org-title">Devs United</h5>
                  <h6 class="membership-dates">(2015 - present)</h6>
                </div>
              </li>

              <li class="org-item no-style-item">
                <div class="org-group">
                  <h5 class="org-title">Devs United</h5>
                  <h6 class="membership-dates">(2015 - present)</h6>
                </div>
              </li>

              <li class="org-item no-style-item">
                <div class="org-group">
                  <h5 class="org-title">Devs United</h5>
                  <h6 class="membership-dates">(2015 - present)</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- End of org Section -->
        <h3 class="body-section-title">&nbsp;Langauges</h3>
        <div id="language-section" class="body-group">
          <div class="inset-container">
            <ul id="language-list" class="horizontal-list-grow-right">
              <li class="langauge-item no-style-item">
                <div class="language-group">
                  <h5 class="langauge-name">Spanish</h5>
                  <h6 class="level-fluency">Good</h6>
                </div>
              </li>

              <li class="langauge-item no-style-item">
                <div class="language-group">
                  <h5 class="langauge-name">French</h5>
                  <h6 class="level-fluency">Good</h6>
                </div>
              </li>

              <li class="langauge-item no-style-item">
                <div class="language-group">
                  <h5 class="langauge-name">Italian</h5>
                  <h6 class="level-fluency">Good</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- End of langauge Section -->
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
@import '../css/simpleResume.css';
</style>
