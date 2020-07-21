<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3 text-white">
                  Lorem ipsum dolor.
                  <span>Sapiente quaerat minima.</span>
                </h1>
                <p
                  class="lead text-white"
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt obcaecati omnis ratione nesciunt! Soluta architecto accusamus, expedita numquam iusto eius laborum dolor officiis, dicta eveniet quis voluptatem fuga repellendus velit.</p>
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href="#talleres"
                    class="mb-3 mb-sm-0"
                    type="white"
                    icon="fa fa-code"
                  >Ver Talleres</base-button>
                  <base-button
                    tag="a"
                    href="#membre"
                    class="mb-3 mb-sm-0"
                    type="white"
                    icon="ni ni-cloud-download-95"
                  >Ver Membresias</base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200" id="talleres">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <h6 class="text-primary text-uppercase">taller 1</h6>
                  <p class="description mt-3">descripcion</p>
                  <div>
                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      allowfullscreen
                    ></b-embed>
                  </div>
                  <div class="mt-3">
                    <badge type="primary" rounded>
                      <i class="ni ni-favourite-28"></i>
                      <badge type="primary">14</badge>
                    </badge>
                    <badge type="primary" rounded>
                      <i class="ni ni-like-2"></i>
                      <badge type="primary">10</badge>
                    </badge>
                    <badge type="primary" rounded>
                      <i class="fa fa-thumbs-down"></i>
                      <badge type="primary">4</badge>
                    </badge>
                  </div>
                  <base-button size="sm" tag="a" href="/profile" type="primary" class="mt-4">Learn more</base-button>

                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <h6 class="text-primary text-uppercase">taller 2</h6>
                  <p class="description mt-3">descripcion</p>
                  <div>
                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      allowfullscreen
                    ></b-embed>
                  </div>
                  <div class="mt-3">
                    <badge type="primary" rounded>
                      <i class="ni ni-favourite-28"></i>
                      <badge type="primary">14</badge>
                    </badge>
                    <badge type="primary" rounded>
                      <i class="ni ni-like-2"></i>
                      <badge type="primary">10</badge>
                    </badge>
                    <badge type="primary" rounded>
                      <i class="fa fa-thumbs-down"></i>
                      <badge type="primary">4</badge>
                    </badge>
                  </div>
                  <base-button size="sm" tag="a" href="/profile" type="primary" class="mt-4">Learn more</base-button>
                  <base-button size="sm" tag="a" href="/inscripcion-taller" type="primary" class="mt-4">Inscribete</base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <h6 class="text-primary text-uppercase">taller 3</h6>
                  <p class="description mt-3">descripcion</p>
                  <div>
                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      allowfullscreen
                    ></b-embed>
                  </div>
                  <div class="mt-3">
                    <badge type="primary" rounded>
                      <i class="ni ni-favourite-28"></i>
                      <badge type="primary">14</badge>
                    </badge>
                    <badge type="primary" rounded>
                      <i class="ni ni-like-2"></i>
                      <badge type="primary">10</badge>
                    </badge>
                    <badge type="primary" rounded>
                      <i class="fa fa-thumbs-down"></i>
                      <badge type="primary">4</badge>
                    </badge>
                  </div>
                  <base-button size="sm" tag="a" href="/profile" type="primary" class="mt-4">Learn more</base-button>
                  <base-button tag="a" href="/inscripcion-taller" size="sm" type="primary" class="mt-4">Inscribete</base-button>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section section-shaped my-0 overflow-hidden" id="membre">
      <div class="shape shape-style-1 bg-gradient-warning shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <!-- <icon name="ni ni-planet" type="warning" rounded class="mb-4"></icon> -->
                  <h6 class="text-warning text-uppercase">titulo</h6>
                  <p class="description mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo laboriosam quis in doloribus a qui. Veniam dicta esse aut ratione ad iure obcaecati hic praesentium laborum, illo ipsa nihil.
                  </p>
                  <div>
                    <badge type="warning" rounded>beneficio 1</badge>
                    <badge type="warning" rounded>beneficio 2</badge>
                    <badge type="warning" rounded>beneficio 3</badge>
                  </div>
                  <base-button tag="a" href="/membresia-profile" type="warning" class="mt-4" size="sm">Learn more</base-button>
                  <base-button tag="a" href="/inscripcion-membresia" type="warning" class="mt-4" size="sm">inscribete</base-button>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import { EmbedPlugin } from 'bootstrap-vue'
// Vue.use(EmbedPlugin)
export default {
  name: "home",
  components: {}
};
</script>
