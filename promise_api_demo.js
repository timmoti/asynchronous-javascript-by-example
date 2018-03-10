function bookRestaurant() {
  console.log("[Me] Book restaurant....");
  return { name: "La Pepa", time: "6:00PM" };
}

function buyFlower() {
  console.log("[Me] Buy flower....");
  return { type: "rose", color: "red" };
}

function finishMyWorkOnFriday() {
  console.log("[Me] Thank God it's Friday!!!");
  // console.log("[Me] But I can't keep my promise...");
  // throw new Error("There is an urgent issue to solve...");
}

const dinnerPromise = new Promise(function(resolve, reject) {
  const waitTillThisFriday = 5000;
  setTimeout(() => {
    try {
      finishMyWorkOnFriday();
      const restaurant = bookRestaurant();
      const flower = buyFlower();
      resolve({ restaurant, flower });
    } catch (badNews) {
      reject(badNews);
    }
  }, waitTillThisFriday);
});

const onFulfilled = ({ restaurant, flower }) => {
  console.log(`[Wife] Hmm...This restaurant ${restaurant.name} is not bad..`);
  console.log(`[Wife] Oh..I love ${flower.type} in ${flower.color} too!`);
};

const onRejected = badNews => {
  console.log(`[Wife] What??? You tell me ${badNews}`);
  console.log("[Wife] You know what's waiting for you at home!!!");
};

//dinnerPromise.then(onFulfilled, onRejected);
dinnerPromise.then(onFulfilled).catch(onRejected);

console.log("Waiting till Friday....");
