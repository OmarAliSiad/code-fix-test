const login = require("../auth");

test("should login with correct credentials", () => {
    expect(login("admin", "1234")).toBe(true);
});

test("should reject invalid credentials", () => {
    expect(login("user", "1234")).toBe(false);
});