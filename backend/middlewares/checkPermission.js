const checkSubscription = (req, res, next) => {
  try {
    if (req.user.userType === 2 || req.user.userType === 3) {
      if (!req.user.package || req.user.packageExpiration < Date.now()) {
        return res.status(402).json({
          success: false,
          message:
            "Your subscription is inactive or expired. Please subscribe.",
        });
      }
    }
    next();
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Subscription check failed" });
  }
};

module.exports = checkSubscription;
