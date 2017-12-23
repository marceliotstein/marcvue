/*
 * MESBurger.vue - Vue component implements CSS-only hamburger menu
 * based on https://github.com/lmgonzalves/morphing-hamburger-menu
 */
<template>
  <div class="burger-container">
    <input id="toggle" type="checkbox">

    <label class="toggle-container" for="toggle">
      <span class="button button-toggle"></span>
    </label>

    <nav class="nav">
      <router-link to="/" class="nav-item">Return to Home</router-link>
      <router-link to="/about" class="nav-item">About This Site</router-link>
      <router-link to="/contact" class="nav-item">Contact Marc</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MESBurger'
}
</script>

<style lang="scss" scoped>
$items: 3;
$transition-duration: 0.5s;
$transition-delay: 0.05s;

/* Basic styles */

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
}

a {
  text-decoration: none;
}

.burger-container {
  position: relative;
  margin: 0px auto 0;
  width: 100%;
  background-color: white;
  overflow: hidden;
}


/* Toggle functionality */

// To hide the checkbox
#toggle {
  position: absolute;
  left: -100%;
  top: -100%;
}

#toggle:focus {

  & ~ .toggle-container .button-toggle {
    /* box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1);*/
  }
}

// Styles for the 'open' state, if the checkbox is checked
#toggle:checked {
  // Any element you need to change the style if menu is open goes here, using the sibling selector (~) as follows

  // Making the "X" icon using `:before` and `:after` pseudo-elements
  & ~ .toggle-container .button-toggle {
    /*box-shadow: 0 0 0 550px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1);*/

    &:hover {
      /* box-shadow: 0 0 0 550px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1), 0 0 0 8px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1);*/
    }

    &:before {
      transform: translateY(-50%) rotate(45deg) scale(1);
    }

    &:after {
      transform: translateY(-50%) rotate(-45deg) scale(1);
    }
  }

  &:focus ~ .toggle-container .button-toggle {
    /*box-shadow: 0 0 0 550px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1), 0 0 0 8px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1);*/
  }

  // Open nav
  & ~ .nav {
    margin-bottom: 40px;
    pointer-events: auto;
    transform: translate(50px, 50px);

    // Restoring nav items from "lines" in the menu icon
    .nav-item {
      color: black;
      letter-spacing: 0;
      height: 40px;
      line-height: 40px;
      border-bottom-width: 2px;
      border-bottom-color: silver;
      border-bottom-style: dotted;
      margin-top: 0;
      opacity: 1;
      transform: scaleY(1);
      transition: $transition-duration, opacity 0.1s;

      // Setting delays for the nav items in open transition
      @for $i from 1 through $items {
        &:nth-child(#{$i}) {
          $delay: ($items - $i) * $transition-delay;
          transition-delay: $delay;
          &:before {
            transition-delay: $delay;
          }
        }
      }

      // Hiding the lines
      &:before {
        opacity: 0;
      }
    }
  }
}

/* Toggle button */

.button-toggle {
  position: absolute;
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 25px;
  background-color: white;
  border: none;
  cursor: pointer;
  border-radius: 100%;
  transition: $transition-duration + 0.1;

  // Shadow on hover
  &:hover {
    /*box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1);*/
  }

  // Making the "X" icon using `:before` and `:after` pseudo-elements
  // Initially hidden because `scale(0)` transformation

  &:before, &:after {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    width: 50%;
    height: 4px;
    background-color: silver;
    border-radius: 5px;
    transition: $transition-duration;
  }

  &:before {
    transform: translateY(-50%) rotate(45deg) scale(0);
  }

  &:after {
    transform: translateY(-50%) rotate(-45deg) scale(0);
  }
}

/* Menu */

.nav {
  display: inline-block;
  margin: 25px 25px 20px;
  // Don't want pointer-events as menu is closed
  pointer-events: none;
  transition: $transition-duration;
}

// Showing nav items as lines, making up the hamburger menu icon
.nav-item {
  position: relative;
  display: inline-block;
  float: left;
  clear: both;
  font-size: 18px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
  letter-spacing: -6.2px;
  height: 14px;
  line-height: 14px;
  text-transform: uppercase;
  white-space: nowrap;
  transform: scaleY(0.2);
  transition: $transition-duration, opacity 1s;

  // Setting delays for the nav items in close transition
  @for $i from 1 through $items {
    &:nth-child(#{$i}) {
      $delay: ($i - 1) * $transition-delay;
      transition-delay: $delay;
      &:before {
        transition-delay: $delay;
      }
    }
  }

  // Adjusting width for the first line
  &:nth-child(1) {
    letter-spacing: -8px;
  }

  // Adjusting width for the second line
  &:nth-child(2) {
    letter-spacing: -7px;
  }

  // Adjusting from the fourth element onwards
  &:nth-child(n + 4) {
    letter-spacing: -8px;
    margin-top: -7px;
    opacity: 0;
  }

  // Getting the lines for the hamburger menu icon
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: black;
    transform: translateY(-50%) scaleY(5);
    transition: $transition-duration;
  }
}
</style>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
}
</style>
