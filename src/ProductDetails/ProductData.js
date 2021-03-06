const DummyData = {
  resultCount: 50,
  results: [
    {
      ItemNo: 1,
      kind: "fruit",
      FruitName: "Australian Cherry",
      fruitPrice: "$5.65",
      FruitImg1:
        "https://agfstorage.blob.core.windows.net/misc/FP_com/2019/01/29/AnticoCherries2.jpg",
      FruitImg4:
        "https://lh3.googleusercontent.com/proxy/d5R9_McUemGLseso5kpNZzbAsa1fQ2u2ltk-v9mYn6ajCoyEIPiFCaXQdNuVfSn6cNhM2v-sAymVntSHqC1k0OABjAmsYKK4oEcSPm-AaYR_kZ6pj26K-c7KREY6hwk",
      FruitImg3:
        "https://www.masitrading.com/wp-content/uploads/2019/12/cherries.jpg",
    },
    {
      ItemNo: 2,
      kind: "fruit",
      FruitName: "British Jackfruit",
      fruitPrice: "$ 5.65",
      FruitImg1:
        "https://www.eckes-granini.com/fileadmin/eckesgranini/eckes-granini.com/05-best-of-fruit/fruechte/titelbilder/fruechte-titelbilder-kirsche.jpg",
      FruitImg4:
        "https://www.thespruceeats.com/thmb/ZnV1KFgs9UHKzDy1p8uMEZeALM4=/3004x3004/smart/filters:no_upscale()/MaraschinoCherries-5bce106546e0fb0051b70a88.jpg",
      FruitImg3:
        "https://www.loginradius.com/blog/async/static/d769a0cd91a6d5d0e55dde8cd498b324/701ee/cherrypck.jpg",
    },
    {
      ItemNo: 3,
      kind: "fruit",
      FruitName: "Thai Cherry",
      fruitPrice: "$ 5.65",
      FruitImg1:
        "https://www.eckes-granini.com/fileadmin/eckesgranini/eckes-granini.com/05-best-of-fruit/fruechte/titelbilder/fruechte-titelbilder-kirsche.jpg",
      FruitImg4:
        "https://www.thespruceeats.com/thmb/ZnV1KFgs9UHKzDy1p8uMEZeALM4=/3004x3004/smart/filters:no_upscale()/MaraschinoCherries-5bce106546e0fb0051b70a88.jpg",
      FruitImg3:
        "https://www.loginradius.com/blog/async/static/d769a0cd91a6d5d0e55dde8cd498b324/701ee/cherrypck.jpg",
    },
    {
      ItemNo: 4,
      kind: "fruit",
      FruitName: "Asian Cherry",
      fruitPrice: "$ 5.65",
      FruitImg1:
        "https://www.eckes-granini.com/fileadmin/eckesgranini/eckes-granini.com/05-best-of-fruit/fruechte/titelbilder/fruechte-titelbilder-kirsche.jpg",
      FruitImg4:
        "https://www.thespruceeats.com/thmb/ZnV1KFgs9UHKzDy1p8uMEZeALM4=/3004x3004/smart/filters:no_upscale()/MaraschinoCherries-5bce106546e0fb0051b70a88.jpg",
      FruitImg3:
        "https://www.loginradius.com/blog/async/static/d769a0cd91a6d5d0e55dde8cd498b324/701ee/cherrypck.jpg",
    },
    {
      ItemNo: 5,
      kind: "fruit",
      FruitName: "Indian Apple",
      fruitPrice: "$ 5.655",
      FruitImg1:
        "https://www.eckes-granini.com/fileadmin/eckesgranini/eckes-granini.com/05-best-of-fruit/fruechte/titelbilder/fruechte-titelbilder-kirsche.jpg",
      FruitImg4:
        "https://www.thespruceeats.com/thmb/ZnV1KFgs9UHKzDy1p8uMEZeALM4=/3004x3004/smart/filters:no_upscale()/MaraschinoCherries-5bce106546e0fb0051b70a88.jpg",
      FruitImg3:
        "https://www.loginradius.com/blog/async/static/d769a0cd91a6d5d0e55dde8cd498b324/701ee/cherrypck.jpg",
    },
    {
      ItemNo: 6,
      kind: "fruit",
      FruitName: "Thai DragonFruit",
      fruitPrice: "$ 5.65",
      FruitImg1:
        "https://www.eckes-granini.com/fileadmin/eckesgranini/eckes-granini.com/05-best-of-fruit/fruechte/titelbilder/fruechte-titelbilder-kirsche.jpg",
      FruitImg4:
        "https://www.thespruceeats.com/thmb/ZnV1KFgs9UHKzDy1p8uMEZeALM4=/3004x3004/smart/filters:no_upscale()/MaraschinoCherries-5bce106546e0fb0051b70a88.jpg",
      FruitImg3:
        "https://www.loginradius.com/blog/async/static/d769a0cd91a6d5d0e55dde8cd498b324/701ee/cherrypck.jpg",
    },
    {
      ItemNo: 7,
      kind: "fruit",
      FruitName: "Indian Grapes",
      fruitPrice: "$ 5.655",
      FruitImg1:
        "https://www.eckes-granini.com/fileadmin/eckesgranini/eckes-granini.com/05-best-of-fruit/fruechte/titelbilder/fruechte-titelbilder-kirsche.jpg",
      FruitImg4:
        "https://www.thespruceeats.com/thmb/ZnV1KFgs9UHKzDy1p8uMEZeALM4=/3004x3004/smart/filters:no_upscale()/MaraschinoCherries-5bce106546e0fb0051b70a88.jpg",
      FruitImg3:
        "https://www.loginradius.com/blog/async/static/d769a0cd91a6d5d0e55dde8cd498b324/701ee/cherrypck.jpg",
    },
    {
      ItemNo: 8,
      kind: "fruit",
      FruitName: "American Pears",
      fruitPrice: "$ 5.655",
      FruitImg1:
        "https://www.eckes-granini.com/fileadmin/eckesgranini/eckes-granini.com/05-best-of-fruit/fruechte/titelbilder/fruechte-titelbilder-kirsche.jpg",
      FruitImg4:
        "https://www.thespruceeats.com/thmb/ZnV1KFgs9UHKzDy1p8uMEZeALM4=/3004x3004/smart/filters:no_upscale()/MaraschinoCherries-5bce106546e0fb0051b70a88.jpg",
      FruitImg3:
        "https://www.loginradius.com/blog/async/static/d769a0cd91a6d5d0e55dde8cd498b324/701ee/cherrypck.jpg",
    },
    {
      ItemNo: 9,
      kind: "fruit",
      FruitName: "Spanish Cherry",
      fruitPrice: "$ 5.65",
      FruitImg1:
        "https://www.eckes-granini.com/fileadmin/eckesgranini/eckes-granini.com/05-best-of-fruit/fruechte/titelbilder/fruechte-titelbilder-kirsche.jpg",
      FruitImg4:
        "https://www.thespruceeats.com/thmb/ZnV1KFgs9UHKzDy1p8uMEZeALM4=/3004x3004/smart/filters:no_upscale()/MaraschinoCherries-5bce106546e0fb0051b70a88.jpg",
      FruitImg3:
        "https://www.loginradius.com/blog/async/static/d769a0cd91a6d5d0e55dde8cd498b324/701ee/cherrypck.jpg",
    },
  ],
};

export default DummyData;
