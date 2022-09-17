let developer = {
  username: "Ivan",
  skills: ['js', 'css', 'angular'],
  showSkills: function() {
    this.skills.forEach(function(skill) {
      console.log(this.username + " can do " + skill);
    })
  }
};

developer.showSkills();

// пофиксить более чем 1-м способом
