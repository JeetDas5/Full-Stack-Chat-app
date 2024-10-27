async function logout(request, response) {
  try {
    const cookieOptions = {
      httpOnly: true, // Ensures the cookie is only accessible by the server
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict", // Mitigates CSRF attacks
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
    };

    return response.cookie("token", '', cookieOptions).status(200).json({
      message: "Season out",
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
        message: error.message || error,
        error: true
    })
  }
}

module.exports = logout;