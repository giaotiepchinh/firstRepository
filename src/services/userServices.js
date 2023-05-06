const userServices = {
  getUser: () => {
    return new Promise((resolve, reject) => {
      const currentUser = null;
      resolve({
        userId: currentUser.ID,
        name: currentUser.name,
      });
    });
  },
};
