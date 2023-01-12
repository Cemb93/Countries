const { Router } = require("express");

const { get_all_info } = require("../servers/get_ALL_info");
const { post_activity, get_all_activity } = require("../servers/post_Activity");
const { get_ID_country } = require("../servers/details_Country");
const { delete_activity } = require("../servers/Delete_Activity");
const { update_activity } = require("../servers/update_Activity");

const COUNTRIES = "/countries";
const DETAIL = "/countries/:id";
const ACTIVITIES = "/activities";
const ACTIVITY = "/activities/:id";

const router = Router();

router.get(COUNTRIES, get_all_info);

router.get(DETAIL, get_ID_country);

router.post(ACTIVITIES, post_activity);

router.get(ACTIVITIES, get_all_activity);

router.delete(ACTIVITY, delete_activity);

router.put(ACTIVITY, update_activity);

module.exports = router;
