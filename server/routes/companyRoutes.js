import express from 'express'
import { ChangeJobApplicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedjobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'

const router = express.Router()

//Register a Company
router.post('/register', upload.single('image'), registerCompany)

//Company Login
router.post('/login',loginCompany)


//get company data
router.get('/company',getCompanyData)

//Post a job
router.post('/post-job',postJob)


//Get Applicants data of Company
router.get('/applicants',getCompanyJobApplicants)


//Get Company job List
router.get('/list-jobs',getCompanyPostedjobs)


//Change application status
router.post('/change-status',ChangeJobApplicationsStatus)


//Change Applications visibility
router.post('/change-visibility',changeVisibility)


export default router;