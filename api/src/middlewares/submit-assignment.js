/**
 * Retrieves an assignment submission (link and screenshot) from the request using
 * `multer` (see https://github.com/expressjs/multer), stores the submitted data and sends
 * emails to the applicant and HYF.
 *
 * @param {object} req
 * @param {object} req.body
 * @param {string} req.body.email applicant's email
 * @param {string} req.body.link link to the applicant's codepen
 * @param {object[]} req.files array of files (screenshot)
 *
 * @param {object} res
 */
module.exports = (req, res) => {

};
