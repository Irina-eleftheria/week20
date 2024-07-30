let user = undefined;
try {
  console.log(user.name);
} catch (error) {
  console.log(error);
  console.log(error.message);
  console.log(error.stack);
  console.log(error.name);
}
