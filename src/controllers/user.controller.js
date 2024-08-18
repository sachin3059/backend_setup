import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const userLogin = asyncHandler( async (req, res, next) => {
    return res.json(
        new ApiResponse(
            200,
            {},
            "this is user login page"
        )
    )
});

const userSignup = asyncHandler( async (req, res, next) => {
    return res.json(
        new ApiResponse(
            200,
            {},
            "this is user signup page"
        )
    )
});

const userDelete = asyncHandler( async (req, res, next) => {
    return res.json(
        new ApiResponse(
            200,
            {},
            "this is user Delete page"
        )
    )
});

export {
    userLogin,
    userSignup,
    userDelete
}

