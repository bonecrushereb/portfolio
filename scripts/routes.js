page('/', portfolioView.changeBackground, homeController.index);
page('/projects', portfolioView.changeBackground, projectController.index);
page('/projects/:title', portfolioView.changeBackground, indprojectController.index);
page('/about', portfolioView.changeBackground, aboutController.index);

page();
