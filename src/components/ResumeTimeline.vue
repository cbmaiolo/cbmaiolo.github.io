<template>
  <section class="timeline">
    <ul>
      <li>
        <h4 class="date">October 2016</h4>
        <div>
          <h4>Started working at TD Lab</h4>
          <ul>
            <li>Developed prototypes for iOS and Android applications on a small team.</li>
            <li>Wrote requests to Nodejs backend to save client data and sync across devices.</li>
            <li>Created smooth UI interactions such as a scaling image carousel, infinite spinner
and sophisticated constraint-based layout rearrangement on rotation in Swift.</li>
            <li>Prototype life-time typically 6-9 months. Recently expanded to web with React.</li>
            <li>Released new features to beta community each sprint, informed by user data.</li>
            <li>Introduced "Bug Hunts" to sprint to ensure quality and reduce technical debt.</li>
            <li>Worked closely with UX team, conducting design reviews for new features,
participating in ideation sessions and designing user studies for new projects.</li>
            <li>Biweekly sprint planning, retrospective, poker plan and task breakdown.</li>
          </ul>
          <p>lots of words and junk</p>
        </div>
      </li>
      <li>
        <h4 class="date">Date</h4>
        <div>
          <h4>TD Lab</h4>
          <h5>Date</h5>
          <p>lots of words and junk</p>
        </div>
      </li>
      <li>
        <h4 class="date">Date</h4>
        <div>
          <h4>TD Lab</h4>
          <p>lots of words and junk</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ResumeTimeline',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.timeline > ul {
  padding: 0px;
}

/* Timeline line */
.timeline > ul > li {
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 30px;
  background: #212121;
}

/* Timeline dots (after each list item) */
.timeline > ul > li::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 160px;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #b39ddb;
  border: 6px solid #212121;
}

/* Event blurb */
.timeline > ul > li div {
  position: relative;
  text-align: left;
  top: 135px;
  width: calc(100vw/2 - 120px);
  padding: 15px;
  background: #EEEEEE;
}

/* Event date */
.timeline > ul > li .date {
  position: relative;
  top: 125px;
  width: calc(100vw/2 - 120px);
  padding: 15px;
}

/* Alternating sides of event date */
.timeline > ul > li:nth-child(odd) .date {
  float: right;
  text-align: right;
  right: 50px;
}

/* Same logic for left side */
.timeline > ul > li:nth-child(even) .date {
  float: left;
  text-align: left;
  left: 50px;
}

/* Part of the event blurb arrow */
.timeline > ul > li div::before {
  content: '';
  position: absolute;
  top: 15px;
  width: 0;
  height: 0;
  border-style: solid;
}

/* Alternating sides of event blubs  (right side below) */
.timeline > ul > li:nth-child(odd) div {
  left: 50px;
}

/* Arrow for event blurb */
.timeline > ul > li:nth-child(odd) div::before {
  left: -15px;
  border-width: 8px 16px 8px 0;
  border-color: transparent #EEEEEE transparent transparent;
}

/* Same logic for left side */
.timeline > ul > li:nth-child(even) div {
  left: calc(-100vw/2 - 45px + 120px);
}
.timeline > ul > li:nth-child(even) div::before {
  right: -15px;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent #EEEEEE;
}

/* GENERAL MEDIA QUERIES
–––––––––––––––––––––––––––––––––––––––––––––––––– */

/* For mobile devices reformat so all blurbs are to the right of timeline */
@media screen and (max-width: 900px) {

  /* timeline line */
  .timeline > ul > li {
    margin-left: 40px;
  }
  .timeline > ul > li div {
    width: calc(100vw - 120px);
  }

  /* Make previously left blubs the same as right blubs */
  .timeline > ul > li:nth-child(even) div {
    left: 45px;
  }
  .timeline > ul > li:nth-child(even) div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent #EEEEEE transparent transparent;
  }
}
</style>
