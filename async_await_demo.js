// Simulating an API that returns Promise
const users = {
  get(id) {
    return Promise.resolve({ id, name: "Gordon Song" });
  },
  getMetaDataFor(user) {
    return Promise.resolve({
      user,
      skills: ["java", "javascript", "python", "scala", "clojure"]
    });
  }
};

async function getUserSkills(userId) {
  try {
    const user = await users.get(userId);
    console.log(`Got user ${JSON.stringify(user)}`);

    const userMetaData = await users.getMetaDataFor(user);
    console.log(`Got metadata for user ${JSON.stringify(userMetaData)}`);

    return userMetaData.skills;
  } catch (error) {
    console.error("Log error inside the getUserSkills", error);
    throw error;
  }
}

getUserSkills("gordon")
  .then(result => console.log("Result: ", result))
  .catch(error => console.error("Log error after calling getUserSkills", error));

console.log("End of script...");
