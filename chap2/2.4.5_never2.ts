enum PageType {
    ViewProfile,
    EditProfile,
    ChangePassword,
}

const getTitleText = (type: PageType) => {
    switch (type) {
        case PageType.ViewProfile:
            return "Setting";
        case PageType.EditProfile:
            return "Edit Profile";
        case PageType.ChangePassword:
            return "Change Password";
        default:
            const wrongType: never = type;
            throw new Error(`${wrongType} is not in PageType`);
    }
};
