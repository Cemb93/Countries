const { Router } = require("express");

const { get_all_info } = require("../servers/get_ALL_info");
const { post_activity, get_all_activity } = require("../servers/post_Activity");
const { get_ID_country } = require("../servers/details_Country");

const COUNTRIES = "/countries";
const DETAIL = "/countries/:id";
const ACTIVITY = "/activities";

const router = Router();

router.get(COUNTRIES, get_all_info);

router.get(DETAIL, get_ID_country);

router.post(ACTIVITY, post_activity);

router.get(ACTIVITY, get_all_activity);

module.exports = router;
