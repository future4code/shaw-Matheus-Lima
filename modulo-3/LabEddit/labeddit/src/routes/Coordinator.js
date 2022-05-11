export const goToFeedPage = (navigate) => {
  navigate("/Login/Feed");
};

export const goBack = (navigate) => {
  navigate(-1);
};

export const goPostPage = (navigate, id) => {
  navigate(`/Feed/Post/${id}`);
};

export const goSignupPage = (navigate) => {
  navigate("/Login/SignUp");
};

export const goToLoginPage = (navigate) => {
  navigate("/");
};
