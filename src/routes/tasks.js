const getTasks = (req, res, next) => {
  const parameters = {
    pageTitle: "Action Plan",
  };

  res.status(200).render("tasks", parameters);
};

module.exports = getTasks;
