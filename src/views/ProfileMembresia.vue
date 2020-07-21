<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 bg-gradient-warning shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-0">
                  <base-button
                    tag="a"
                    href="/inscripcion-membresia"
                    type="warning"
                    size="sm"
                    class="float-right"
                  >Incribete</base-button>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>titulo</h3>
              <div class="h6 font-weight-300">sub titulo</div>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam laborum quibusdam officiis placeat vel! Esse iste aliquam alias quas maiores expedita ipsa modi ad, maxime ea odio quo doloremque sed.</p>
                  <!-- <a href="#">Show more</a> -->
                  <ul class="list-unstyled mt-5">
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <badge type="warning" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                        <h6 class="mb-0">beneficio 1</h6>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <badge type="warning" circle class="mr-3" icon="ni ni-html5"></badge>
                        <h6 class="mb-0">beneficio 2</h6>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <badge type="warning" circle class="mr-3" icon="ni ni-satisfied"></badge>
                        <h6 class="mb-0">beneficio 3</h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>
