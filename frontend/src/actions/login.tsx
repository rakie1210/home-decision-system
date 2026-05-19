/**
 * Logs in the user and stores the token in either sessionStorage or localStorage
 * depending on the rememberMe flag
 * @param email The user's email
 * @param password The user's password
 * @param rememberMe Whether to remember the user
 * @returns The token
 */
export default async function login(
  email: string,
  password: string,
  rememberMe: boolean,
) {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Login failed.");
  }

  localStorage.removeItem("token");
  sessionStorage.removeItem("token");

  if (rememberMe) {
    localStorage.setItem("token", data.token);
  } else {
    sessionStorage.setItem("token", data.token);
  }
  return data.token;
}

/**
 * Removes both the sessionStorage and localStorage token
 * in order for the app not to think the user is still logged in
 */
export async function logout() {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
}

/**
 * Returns the token from either sessionStorage or localStorage
 * @returns The token if found, otherwise null
 */
export function getToken() {
  return localStorage.getItem("token") ?? sessionStorage.getItem("token");
}

export function getAuthHeaders() {
  const token = getToken();
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}
