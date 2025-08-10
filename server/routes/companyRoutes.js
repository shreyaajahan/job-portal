import express from 'express'
import { ChangeJobApplicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedjobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router = express.Router()

//Register a Company
router.post('/register', upload.single('image'), registerCompany)

//Company Login
router.post('/login',loginCompany)


//get company data
router.get('/company',protectCompany,getCompanyData)

//Post a job
router.post('/post-job',protectCompany,postJob)


//Get Applicants data of Company
router.get('/applicants',protectCompany,getCompanyJobApplicants)


//Get Company job List
router.get('/list-jobs',protectCompany,getCompanyPostedjobs)


//Change application status
router.post('/change-status',protectCompany,ChangeJobApplicationsStatus)


//Change Applications visibility
router.post('/change-visibility',protectCompany,changeVisibility)


export default router;