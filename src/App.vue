<template>
  <div id="app" v-cloak>
    <!-- <img src="./assets/background.png"> -->
    <!-- <router-view/> -->

    <div class="container">
      <header class="header">
        <navigation />
      </header>
      <main class="main">
        <home>
          <h1 slot="title">Olios</h1>
          <h2 slot="text">Newest furniture shop template</h2>
        </home>
      </main>
      <aside class="aside">
        <categories>
          <a class="categories__link" href="#" slot="categories__link1">Living Room
            <svg slot="categories__icon1" class="categories__icon" aria-label="Home page">
              <image id="ICON" width="53" height="57" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA5CAYAAACWJGMLAAAAAXNSR0IArs4c6QAAAtVJREFUaAXtmr9rFEEUx+/8EVFBhTQqFlotWAkWBixM5x8giFYGbFJYWAar079AK7FLwEotRSshNgqCWAl3EPAUBMEUEQRDVPTzcEfGRzx39u3l3q774HszuzPvzfvumzc7u3vdfr+/vdPpXAWXQQa2gTrKF5x+BOZ38HMDXAN1l90QOAe6XSL1icq+ujOK/N+QSMWEXnD8POqQWp1HYRd4Dx6kKhv6z6B7KtefElKxPM6yrBefSKkPBoM5+gupFexInm6JMG6PgQKp2i4KIy9WXVe6ltTIK1CXxkZOP736VRWMg/mKVJW9f9mZjTuMi9R3BlmLBxpzfT22Py5SH7lP3YwHGmedWXEA+2fDGI3MqZZUCK/3snROMY9PQ+44WCJ/NjwRLUUKQrJpfQKklCl8B7iRsjklkemDULohJI6UIsV0+4HuSTBN/akY8iSlpp8QgIzcYD97IhN8KRWpoOy1bEl5jYz2q42UviJej9tIeY2M9quNlL4iXo8bGSm9TZphB255XSy7dpFjRju/rBT/lXfpv0W+esjmtFHyX0y/JUK2aAjbQ3T3gtfgisFOquocCpeCks6pIY8Uy6FRl+TJUc59oM8f79lCP9q/5fXVUXZC/6pKxp2NbRWefiheRPENeBYb8FgvTArnD+cEDnkkEvukp1/cpuu3OPEOvNIN3o4LkyJHJF/ueyOwmT+a1AVy58RmHQue25P3iz+OF1StrpsmlWFaYJUpqwGLfspCYRlnS3V1pK6TO72yHjB119DdD1bL2qhCT5P6q00c3knjefAS4vJ21q2kTD/Zvd8Fy27Z5I6lkHqb6wwbQ4opdw8yR8AZ76QK55QQgZj8kcq9aFILLAiWJ99w052eJHNNSh7HwyO5xa+uRdmqq0nJYjA0GJVPpmLzq8GGWVWTWqzo5iv/9pyYpCzpE3MydeCWVOoVm1R/nVNWP25jQP5KvWI1ZNH/CRhsgIX6ilQyAAAAAElFTkSuQmCC"/>
            </svg>
          </a>
          <a class="categories__link" href="#" slot="categories__link2">Office
            <svg slot="categories__icon2" class="categories__icon" aria-label="Home page">
              <image id="ICON" width="53" height="45" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAtCAYAAAAOYyOGAAAAAXNSR0IArs4c6QAAAi5JREFUaAXtWT1LA0EQNX4Wigbs1CJdsFKwEwvFThAFf4GCbRIFC/+B/0AbIa2dhYKNiNhZqNiYFBKxtlARCyHEN5iVdbzd7H1w2Q27MOztzM7ee/dm9y6aaTQaXaJVq9VpXN+KsWH/ls/nszQX+Xfopgzzkp52CRzztGh30ivbsF6vBsQ2YjVNfBmxDUX8BP5DRSxpdwELLsiL6khdQE4qp8CGUssFBn6cj8g91sQTCwHHKl9MR2oQCSWe0By/K/xWuHWk6AR5VaD8gH9YEWu7W0fqEyVUViHUqKhKSc3fkaefJ5Va/cS8kVcq5gNMLd1IKZx0m7AabDE1ZDFuZEQK68/CcrAZmPVN956SwRcxOIKdy05br41I4SVMn0VntpLguIxI8SSDcRH7j9RtSzPdU20BF/WmSSu1BSAjUcHEzHsR+TpSVyihupgY0A9wH/beBffJY6xHPx7nZF/I613cY79Vjo7UUKvkCHFaM46S/x5kEAZO6hmT1oMmanxfmhgP7cFR5s4Q42uTuZlKpdKPiTuwNdgEjMYuNvrhegMrkFIHsLDqIMW6RmU9Dhslpah8+qyDGB1QnZSSCa1gTPvKtTYGwKdN0D38oLjHkfnUDDrT4VXx5w9EHflF4Um5Uo98T5V4fTpCJCvj5KSKctDVa07qAUTCfPbYwpu+giYFGE5qydEjPQdCv/928qefkNf23itlu0ICn1dKPAnbe6+U7QoJfF4p8SRs7ztSqW8qgmb2TywkAQAAAABJRU5ErkJggg=="/>
            </svg>
          </a>
          <a class="categories__link" href="#" slot="categories__link3">For kids
            <svg slot="categories__icon3" class="categories__icon" aria-label="Home page">
                <image id="ICON" width="54" height="35" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAjCAYAAADfXvn1AAAAAXNSR0IArs4c6QAABDlJREFUWAntmFlIFVEcxvVaUla2R2EklmC0QAutFJkPRmT1UlA9+JA9FL32YIF1CQok6EksWogs6kWioCgt4iJB1EOkLVwpbdGwbKPFFqPs901zh3vnbhN3hLnRH36cZb575v/NOXPmaGYwGOzLiAxfUVGRvS9S4cFWa2trRM4+e47paMruQe0oY7FE6dg3IJWkmf6J/H40BJnp7/HGQjeMa4XQge5NAl0W16ZBD7r2eDon/XFnjGRy4LiZfMRY9GXDSTo74C500l4ZITIb9FdQ7YI7KmnvhUzzslXQN5fGI2iBNtpXYLglMCvqg+X2fns7rjGENbAZAgykmTGCejaVeigHvbBvYQxc4NoaSitob6NxDIbAK9AKqYJarlnmqC+g7zoUwAfQ7K+ARq5Z5sx6I/0N1Mso40YiY7v5VRtMAcMcg4VMrabvK5TCBDgDA6EejWGOUqZqQVEN0m1Xg9gKhjl0MqVkc+E25MN80JJVaZhDJ4PSqU/mn0HcyLRv96zt8CepmQqAzOlGH2EyyFQZWj3lDG6aRVEHm+AnNMMcUFSjq/xTNbThhu/Tr7EHg0yVolXSGnMmhcbXatBS1rjKR3mUoLtHaQX6xNu9paTCjzspiuEB6AYy9R5Wcc0wRV063bQcToBMypRu5OeaZYq2tIcotsA3mAEydRUsU9SlU+Il8Bw02zKlfKJM0RcVCWcspOZp6N1YAjlwg5tq5mIG2ulcKIRmdE8pYwa68VyYB93obsUU0YluEMVS0EpqQqsHEhXoImbMkbGoUTzYYTfm82COrqTkKWM8dWtrT9WdZ4yZprSduxL9boyEtUsmjDBT+ka5EtrtXAsS1HhrYT0shHzQztZDoW/WZahjZ3tCaUR/mNLArhkjQZ1CakEfXHvoSKUThqhCe4SyErSFh04TVN0LV5YiifpJqQFk6jXsB333xsII0HdNH/BroKWp04cOxU2g5afThKuR8oxhah8Z7TKzqqHcyVL7bMtSx6Q2OIV+GeVpCM3sO+ol0AKuRUozRpJaSlPNbH5Q6j3S+5Qo9H5pVkMh0y9DDbfKlIwxM30kshHOgU73h+EmhjfASOpGUPfBLDhIx0OYDZ9AS7AArHMndVci5aWIuV4SXkc2O2APaIM4C9oNdSrvhXGgw24o9G5VmI0ApQ7DrkbKxpSNOXMHMFJHUxuDjOowrFN5KDRD2gGPotdGYwS/KaYSgDxwLfrtEEzCuWQ5CfTwtEF0YugXZVSgLaQzAHlo9N7+dTCGXgsrXJkxa7SwCgnqTxttJkkD7eOwmUuqdyJIafNwcgOnGplDW+xUn0znGWNK1DSXLGdH1z1lzFHGDkX/jTl8UJ6RRc0Yu9NQz2TnMBFy1kE7IvQd039yR0X0pn+jWzN2Kf19RDk4L2N+0D9B/5V4gRG/j29HO5XFcBG+QLqGzqI6fC/CU9dvY0qTR8+17u8AAAAASUVORK5CYII="/>
            </svg>
          </a>
          <a class="categories__link" href="#" slot="categories__link4">Kitchen
            <svg slot="categories__icon4" class="categories__icon" aria-label="Home page">
              <image id="ICON" width="56" height="43" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAArCAYAAAAtxEsrAAAAAXNSR0IArs4c6QAAA91JREFUaAXtmltIFFEYx90MMSK6EPmQoIWwkBR0xQhqK5MiCB8iykC2hxIjiIgoQiLooV58yCiDAkMIeggiCoIU8iWwkO6Elg9WFIQ9SBBZJNvvW2d2z5x1ZsfZ3dmdxQ/+znc5t/85c86cc9ZQLBYr0WVoaCiKr0v3O9gLw+HwmBqnjEbse6ovjb6MMkbUNJQRwX6i+tLoqynjlZomJAQpqBxnA6gCpWA5qANu5S4J/2qJK7E3az4n8z7BX1qCJdj1ms/JfETwB/gEHkN2PDQ4OFiN0QNqQDHJMGR2zOJPJyg2cjJQwqlTRnACRYiKfAfjcS24f2S6VRjNn5iNYpIT337e2z5RgirawlQqBF0JGctIeBvMBU10hL5qhvBfB2HQTPwzT4tQxnkcspi1En9tCWIQP8ojCs4S7+VpEeJ7cZwG7cTvWII2hjp6NkkS7lVoUsEusCnhTSqLUY+ALWB30m3RzmBtBAcs3qRxHHU9OJR0WbQWrHXgmMXrYLgeQcp4Ca4AGcGUbxM9OkoPnyNWC+SzMZWcxFkPbk4VxNcGmkG7Tfwi/j+gwyae4pZFJqZ4t9LQPsUOnEonR2h0YgD0EYwaCfwkVkNllaAfZGMFr6achOgjmAgUi6KP4GGIDfhM7hT1NQFZmL5loW5ZhG6Y5egEh5mDls2qmTBXT6bEqFH2e+oeybQeylugljGdz4SaLzD6DMHADJVNQ/U5mJKMd1qW8FsgAuSs6FXknHaBeeb6I+21IjVfWoIkvga2A/l4/gReZS0ZL9NhzyEp3zxfxA3BOloyQKO2ZdIiiO0kv5y4N4CCIlhGg/SrBFypAgl5hWvpjDdmFJ9snl8Ac5fi68KWtcoMct0Q6UdfIwR57uHxFFwVOx+SFYIKOdmR9IJ3Bjk5VfwGXSAvkjFBjdwDWMiZUeabSa6BV/ZZXthRaUYEC52cdKpngkEg55lgUMh5Igg5uVzqBrKgmHOuHr0g5hztsMi0X1EWDLnieAvi5LDlyv4D+AjyuqBQf4q4ISjbsypGbr6ZG1KX0BsNciU8h7FX8nRaLVcY+eWz4Zu42arJXahc941B0tKwdLYl8aQhnfVwCn/OXG4ItlH7FxABsm3zKvKzQAej/NVrAV7ypSVIg+S3CzlRCAInbuZg4EipDZ4hqPZGEPWZEQziqKltlqv7fzjMyyRZys2Tt5oul/oiCp8H5PMhbclUyimgwigk/gtvD4ac30TMwKTl79+lOaiuR+ZgK5CtVrGJcGrV/09mH86DDkxPOMT8DsntnN0vxdKWOWxSxuMEzZaxt4yi296fkEGOSgUhbtv6H0ceHZr4RdGUAAAAAElFTkSuQmCC"/>
            </svg>
          </a>
          <a class="categories__link" href="#" slot="categories__link5">Accesories
            <svg slot="categories__icon5" class="categories__icon" aria-label="Home page">
              <image id="ICON" width="58" height="46" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAuCAYAAAB5/AqlAAAAAXNSR0IArs4c6QAAAk5JREFUaAXtWjtLQzEY7bUqvvAxKOhUUOxoF1d1q2M3QQXdXVwcuogguDioq6DoPxBc9B84OFRUaAWhKAgqOvoc6jk0aWO4ofOX5oPTL7nnXszJyU1j0qhYLFYS9bhKp9OZelVuqVQqFdD6Ca2gRRd8z0Gobw43jaOtlnODeIlXrWtSq4NmwyNr1jU5r8q2o09Qt20pnEU9C5wDZxbH6jowAGwC74AZY6isADfAgUmo8jzyJHAIXKtrOnWisAV8AXl90cjTKOcAV7vWwI3o+22hr/ge3dUkM4ZyPxKFXtic4jnUKfQQfBm5Fnh2BhUKvXc8mwFHoafgT5Brof4uhX47nuW9OcDVrmVwNaFNMxkFobDdqwiOemUnxARHg6NCeyAMXaHGOZsdHHV2jVAiOCrUOGezg6POrhFKNI2j9g5DUv1nb/rWoSodMRwp3Vm9MXyPerYthiPVrvjuGL5PcVEMR4pbLQxXu5JVuvrZtJtjn9B/Z/aE4PI42q5dT9hD9xnkhmBxZtN3UEnpC7ZQ7uYta1J4ppZa2ELL2FrkFqL4wARWgIhwbBiJt7Iu4J8WDt0PoEvx47D8SJWlp1FDwA+FXgJT6iIXB0uq7FO65aqG5xu+x14LZlmeRtHFNw/VcgGUh8bjqFKp/igF7ybd5emT/ZUjWf8LRHIOSnCty4mIZ5tzwDCgF+koio5XtJ6jdRVi3+jePrAA+BY82l8EhoAsHf1FgYI5hh9VRhIffA3blIpuCtTv5AMsTilCfLKWgO2+vI8NjQlCG3aRsBv+AMkBigkfRXR+AAAAAElFTkSuQmCC"/>
            </svg>
          </a>
        </categories>
      </aside>
    </div>
  </div>
</template>

<script>

  import Navigation from "./components/Navigation";
  import Home from "./components/Home";
  import Categories from "./components/Categories";

  export default {
    name: 'App',
    components: {
      Navigation,
      Home,
      Categories
    }
  };
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  [v-cloak] {
    display: none;
  }
  .container {
    display: flex;
    width: 100%;
    height: 100vh;
    background-image: url('./assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .header {
    display: flex;
    width: 8%;
    flex: 0 0 8%;
    flex-direction: column;
    background-color: rgba(255, 255, 255, .9);
  }
  .main {
    flex: 1;
  }
  .aside {
    display: flex;
    width: 15%;
    flex: 0 0 15%;
    flex-direction: column;
    background-color: rgba(255, 255, 255, .9);
  }
  .categories__link {
    display: flex;
  }
</style>
