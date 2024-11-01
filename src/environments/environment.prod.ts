import { Environment } from "./environment.type";

export const environment: Environment = {
    name: 'prod',
    backend: {
        hostname: "https://otd.waseel.com",
        authService: "/medical-rule-authentication",
        controller: {
           // All the controllers paths related to the MRE-controller service(Microservice) should start with /medical-rules-service/
           createRequest: "/medical-rules-service/",
           createRequestV2: "/medical-rules-service/validate-claim",
           createPayerRequestV2: "/medical-rules-service/validate-payer-claims",
           createProviderRequestV2: "/medical-rules-service/validate-provider-claims",
           fetchRequest: "/medical-rules-service/submitted-claims",
           fetchServices: "/medical-rules-service/services",
           fetchServicesByCriteria: "/medical-rules-service/services/{searchParameter}/all",
           fetchDiagnosis: "/medical-rules-service/diagnosis/{searchParameter}",
           fetchBulkUpload: `/bulk-upload/claims-validation/uploads`,
           fetchCustomization:`/medical-rule-customization/batch-upload`,
           fetchAssociatedPayers:`/payer-provider-link/associated/payers`,
           fetchAssociatedProviders:`/payer-provider-link/associated/providers`,
           fetchAdminAssociatedPayers:`/payer-provider-link/admin/associate/payers`,
           fetchAdminAssociatedProviders:`/payer-provider-link/admin/associate/providers`,
           fetchAcounts:`/payer-provider-link/Accounts`,
           fetchSymptoms:`/medical-recommendation/symptom/`,
           viewRequestDetails: "/medical-rules-service/submitted-claim/details",
           uploadCustomRoles: `/upload-custom-rules`,
           viewCustomRoles: `/view-custom-rules`,
           uploadBulk: `/bulk-upload/claims-validation/files`,
           uploadCusotmazation:`/medical-rule-customization/batch-upload`,
           downloadbatchFile: `/medical-rules-service/bulk`,
           downloadCustomizationFile:`/medical-rule-customization/batch-upload/`,
           fetchUserCategory:`/medical-rule-authentication/category`,
           fetchUserSurveyToken: `/medical-rule-authentication/survey_token`,
           feedbacksurveyUrl:`https://feedback.dr-eclaims.waseel.com/en/`,
           generateChiefComplaints:`/medical-recommendation/chiefComplaint/`,
           generateRecommendations:`/medical-recommendation/services_sueggstion/`,
           fetchSubmittedRequests:`/bulk-upload/claims-validation/uploads/submitted`,
           UserFeedbackable: `https://api.eclaims.waseel.com/notifications/survey-response/`,
           getSurveyId: `https://api.eclaims.waseel.com/notifications/survey/`,


        },
        bulkUpload: {
            fetchBulkUploadMetaData: `/claims-validation/bulk/{id}`,
            fetchBulkUploadClaims: `/bulk/{id}/details/claims`,
        },
        pbm: {
            //temporary; should be updated!!!
            fetchBulkUploads: `/pbm-bulk-file-manager/pbmFileUpload/`,
            uploadBulk: `/pbm-bulk-file-manager/pbmFileUpload/`,
            downloadbatchFile: `/pbm-bulk-file-manager/pbmFileUpload/download/`,
            fetchBulkUpload: `/pbm-bulk-file-manager/pbmFileUpload/{id}`,
            getUploadclaims:`/pbm-bulk-file-manager/pbmFileUpload/{id}/claims`,
            fetchDrugsServicesByCriteria: `medical-rules-pbm-integration/Drugs?keyWord={searchParameter}`,
            validatePbm:`/medical-rules-pbm-integration/validate`
        }
    }
}
