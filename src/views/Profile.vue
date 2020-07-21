<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
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
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      allowfullscreen
                    ></b-embed>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-0">
                  <base-button tag="a" type="disabled" size="sm" class="mr-4">inscribete</base-button>
                  <base-button tag="a" href="/talleres#talleres" type="default" size="sm" class="float-right">ver mas</base-button>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <badge type="primary" rounded>
                      <i class="ni ni-favourite-28"></i>
                      <badge type="primary">14</badge>
                    </badge>
                  </div>
                  <div>
                    <badge type="primary" rounded>
                      <i class="ni ni-like-2"></i>
                      <badge type="primary">10</badge>
                    </badge>
                  </div>
                  <div>
                    <badge type="primary" rounded>
                      <i class="fa fa-thumbs-down"></i>
                      <badge type="primary">4</badge>
                    </badge>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>
                titulo

              </h3>
              <div class="h6 font-weight-300">
                sub titulo
              </div>

            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam laborum quibusdam officiis placeat vel! Esse iste aliquam alias quas maiores expedita ipsa modi ad, maxime ea odio quo doloremque sed.</p>
                  <!-- <a href="#">Show more</a> -->
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
