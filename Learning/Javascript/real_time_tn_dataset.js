const drivers = [
  {
    "id": "D001",
    "name": "Kumar Sathish",
    "licenseNumber": "TN-62-258740",
    "phone": "+91-987651001",
    "assignedTruckId": "T001",
    "status": "inactive",
    "experienceYears": 16,
    "training": {
      "completed": true,
      "lastCourse": {
        "name": "Advanced Defensive Driving",
        "completedOn": "2024-06-18T17:45:24.874538",
        "score": 97,
        "instructor": {
          "name": "Mr. Dinesh",
          "certifiedBy": "TNSDC"
        }
      }
    },
    "tripHistory": [
      {
        "tripId": "TRIP10",
        "from": "Vellore",
        "to": "Nagercoil",
        "cargo": "Textiles",
        "loadWeight": 9.48,
        "startTime": "2025-03-25T17:45:24.874577",
        "endTime": "2025-03-18T17:45:24.874584",
        "status": "completed",
        "deliveryFeedback": {
          "clientRating": 3.5,
          "remarks": "Delayed due to traffic"
        }
      }
    ]
  },
  {
    "id": "D002",
    "name": "Vasanth Rajesh",
    "licenseNumber": "TN-91-201291",
    "phone": "+91-987651002",
    "assignedTruckId": "T002",
    "status": "on-break",
    "experienceYears": 17,
    "training": {
      "completed": true,
      "lastCourse": {
        "name": "Advanced Defensive Driving",
        "completedOn": "2025-03-04T17:45:24.874605",
        "score": 86,
        "instructor": {
          "name": "Mr. Ramesh",
          "certifiedBy": "TNSDC"
        }
      }
    },
    "tripHistory": [
      {
        "tripId": "TRIP20",
        "from": "Vellore",
        "to": "Trichy",
        "cargo": "Cement",
        "loadWeight": 7.09,
        "startTime": "2025-03-13T17:45:24.874625",
        "endTime": "2025-03-31T17:45:24.874632",
        "status": "completed",
        "deliveryFeedback": {
          "clientRating": 4.0,
          "remarks": "Delayed due to traffic"
        }
      },
      {
        "tripId": "TRIP21",
        "from": "Erode",
        "to": "Coimbatore",
        "cargo": "Textiles",
        "loadWeight": 6.83,
        "startTime": "2025-02-13T17:45:24.874651",
        "endTime": "2025-04-02T17:45:24.874665",
        "status": "completed",
        "deliveryFeedback": {
          "clientRating": 4.7,
          "remarks": "Smooth delivery"
        }
      }
    ]
  },
  {
    "id": "D003",
    "name": "Naveen Balaji",
    "licenseNumber": "TN-64-595162",
    "phone": "+91-987651003",
    "assignedTruckId": "T003",
    "status": "inactive",
    "experienceYears": 17,
    "training": {
      "completed": true,
      "lastCourse": {
        "name": "Advanced Defensive Driving",
        "completedOn": "2024-03-26T17:45:24.874693",
        "score": 90,
        "instructor": {
          "name": "Mr. Dinesh",
          "certifiedBy": "TNSDC"
        }
      }
    },
    "tripHistory": [
      {
        "tripId": "TRIP30",
        "from": "Salem",
        "to": "Chennai",
        "cargo": "Fruits",
        "loadWeight": 3.53,
        "startTime": "2025-02-15T17:45:24.874707",
        "endTime": "2025-03-29T17:45:24.874711",
        "status": "completed",
        "deliveryFeedback": {
          "clientRating": 4.1,
          "remarks": "Delayed due to traffic"
        }
      }
    ]
  },
  {
    "id": "D004",
    "name": "Sathish Murugan",
    "licenseNumber": "TN-56-318919",
    "phone": "+91-987651004",
    "assignedTruckId": "T004",
    "status": "on-trip",
    "experienceYears": 24,
    "training": {
      "completed": true,
      "lastCourse": {
        "name": "Advanced Defensive Driving",
        "completedOn": "2024-07-13T17:45:24.874725",
        "score": 83,
        "instructor": {
          "name": "Mr. Dinesh",
          "certifiedBy": "TNSDC"
        }
      }
    },
    "tripHistory": [
      {
        "tripId": "TRIP40",
        "from": "Vellore",
        "to": "Chennai",
        "cargo": "Fruits",
        "loadWeight": 5.35,
        "startTime": "2025-02-17T17:45:24.874739",
        "endTime": "2025-03-14T17:45:24.874744",
        "status": "completed",
        "deliveryFeedback": {
          "clientRating": 4.3,
          "remarks": "On-time delivery"
        }
      }
    ]
  },
  {
    "id": "D005",
    "name": "Bharath Mohan",
    "licenseNumber": "TN-66-597444",
    "phone": "+91-987651005",
    "assignedTruckId": "T005",
    "status": "on-trip",
    "experienceYears": 20,
    "training": {
      "completed": true,
      "lastCourse": {
        "name": "Advanced Defensive Driving",
        "completedOn": "2024-11-14T17:45:24.874757",
        "score": 82,
        "instructor": {
          "name": "Mr. Murugan",
          "certifiedBy": "TNSDC"
        }
      }
    },
    "tripHistory": [
      {
        "tripId": "TRIP50",
        "from": "Trichy",
        "to": "Nagercoil",
        "cargo": "Electronics",
        "loadWeight": 7.0,
        "startTime": "2025-02-08T17:45:24.874768",
        "endTime": "2025-03-11T17:45:24.874773",
        "status": "completed",
        "deliveryFeedback": {
          "clientRating": 4.1,
          "remarks": "Delayed due to traffic"
        }
      },
      {
        "tripId": "TRIP51",
        "from": "Nagercoil",
        "to": "Salem",
        "cargo": "Electronics",
        "loadWeight": 4.74,
        "startTime": "2025-03-04T17:45:24.874782",
        "endTime": "2025-04-04T17:45:24.874786",
        "status": "completed",
        "deliveryFeedback": {
          "clientRating": 4.2,
          "remarks": "Delayed due to traffic"
        }
      },
      {
        "tripId": "TRIP52",
        "from": "Erode",
        "to": "Vellore",
        "cargo": "Textiles",
        "loadWeight": 8.72,
        "startTime": "2025-01-14T17:45:24.874795",
        "endTime": "2025-04-08T17:45:24.874799",
        "status": "completed",
        "deliveryFeedback": {
          "clientRating": 4.3,
          "remarks": "Smooth delivery"
        }
      }
    ]
  },
  // {
  //   "id": "D006",
  //   "name": "Vasanth Murugan",
  //   "licenseNumber": "TN-14-839653",
  //   "phone": "+91-987651006",
  //   "assignedTruckId": "T006",
  //   "status": "inactive",
  //   "experienceYears": 12,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-09-04T17:45:24.874813",
  //       "score": 85,
  //       "instructor": {
  //         "name": "Mr. Kumar",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP60",
  //       "from": "Tirunelveli",
  //       "to": "Erode",
  //       "cargo": "Cement",
  //       "loadWeight": 9.5,
  //       "startTime": "2025-02-10T17:45:24.874823",
  //       "endTime": "2025-03-18T17:45:24.874828",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.9,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP61",
  //       "from": "Vellore",
  //       "to": "Coimbatore",
  //       "cargo": "Cement",
  //       "loadWeight": 9.15,
  //       "startTime": "2025-01-21T17:45:24.874837",
  //       "endTime": "2025-04-08T17:45:24.874841",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.3,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D007",
  //   "name": "Harish Arun",
  //   "licenseNumber": "TN-78-156260",
  //   "phone": "+91-987651007",
  //   "assignedTruckId": "T007",
  //   "status": "on-trip",
  //   "experienceYears": 12,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-05-18T17:45:24.874854",
  //       "score": 100,
  //       "instructor": {
  //         "name": "Mr. Elango",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP70",
  //       "from": "Chennai",
  //       "to": "Coimbatore",
  //       "cargo": "Fruits",
  //       "loadWeight": 6.87,
  //       "startTime": "2025-02-21T17:45:24.874869",
  //       "endTime": "2025-04-07T17:45:24.874877",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D008",
  //   "name": "Sanjay Ramesh",
  //   "licenseNumber": "TN-81-290780",
  //   "phone": "+91-987651008",
  //   "assignedTruckId": "T008",
  //   "status": "on-break",
  //   "experienceYears": 23,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-11-05T17:45:24.874903",
  //       "score": 89,
  //       "instructor": {
  //         "name": "Mr. Saravanan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP80",
  //       "from": "Chennai",
  //       "to": "Vellore",
  //       "cargo": "Electronics",
  //       "loadWeight": 3.91,
  //       "startTime": "2025-01-09T17:45:24.874919",
  //       "endTime": "2025-04-01T17:45:24.874923",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP81",
  //       "from": "Coimbatore",
  //       "to": "Nagercoil",
  //       "cargo": "Cement",
  //       "loadWeight": 7.38,
  //       "startTime": "2025-03-10T17:45:24.874933",
  //       "endTime": "2025-03-17T17:45:24.874938",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.0,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D009",
  //   "name": "Vignesh Saravanan",
  //   "licenseNumber": "TN-53-745632",
  //   "phone": "+91-987651009",
  //   "assignedTruckId": "T009",
  //   "status": "on-break",
  //   "experienceYears": 13,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-05-12T17:45:24.874955",
  //       "score": 84,
  //       "instructor": {
  //         "name": "Mr. Karthik",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP90",
  //       "from": "Erode",
  //       "to": "Vellore",
  //       "cargo": "Textiles",
  //       "loadWeight": 6.4,
  //       "startTime": "2025-04-05T17:45:24.874972",
  //       "endTime": "2025-04-07T17:45:24.874980",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP91",
  //       "from": "Nagercoil",
  //       "to": "Chennai",
  //       "cargo": "Electronics",
  //       "loadWeight": 9.06,
  //       "startTime": "2025-03-13T17:45:24.874995",
  //       "endTime": "2025-03-30T17:45:24.875000",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D010",
  //   "name": "Murugan Murugan",
  //   "licenseNumber": "TN-89-103312",
  //   "phone": "+91-987651010",
  //   "assignedTruckId": "T010",
  //   "status": "on-duty",
  //   "experienceYears": 5,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-04-08T17:45:24.875015",
  //       "score": 85,
  //       "instructor": {
  //         "name": "Mr. Naveen",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP100",
  //       "from": "Coimbatore",
  //       "to": "Trichy",
  //       "cargo": "Cement",
  //       "loadWeight": 7.72,
  //       "startTime": "2025-03-07T17:45:24.875031",
  //       "endTime": "2025-03-25T17:45:24.875038",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.8,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D011",
  //   "name": "Vignesh Arun",
  //   "licenseNumber": "TN-40-111709",
  //   "phone": "+91-987651011",
  //   "assignedTruckId": "T011",
  //   "status": "on-trip",
  //   "experienceYears": 24,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-11-02T17:45:24.875057",
  //       "score": 84,
  //       "instructor": {
  //         "name": "Mr. Murugan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP110",
  //       "from": "Nagercoil",
  //       "to": "Salem",
  //       "cargo": "Fruits",
  //       "loadWeight": 8.31,
  //       "startTime": "2025-01-23T17:45:24.875075",
  //       "endTime": "2025-03-10T17:45:24.875082",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP111",
  //       "from": "Nagercoil",
  //       "to": "Erode",
  //       "cargo": "Fruits",
  //       "loadWeight": 9.37,
  //       "startTime": "2025-01-26T17:45:24.875095",
  //       "endTime": "2025-04-07T17:45:24.875100",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.5,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP112",
  //       "from": "Trichy",
  //       "to": "Chennai",
  //       "cargo": "Fruits",
  //       "loadWeight": 9.4,
  //       "startTime": "2025-02-18T17:45:24.875109",
  //       "endTime": "2025-03-22T17:45:24.875113",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.7,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D012",
  //   "name": "Dinesh Saravanan",
  //   "licenseNumber": "TN-31-316124",
  //   "phone": "+91-987651012",
  //   "assignedTruckId": "T012",
  //   "status": "inactive",
  //   "experienceYears": 9,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-06-30T17:45:24.875125",
  //       "score": 94,
  //       "instructor": {
  //         "name": "Mr. Rajesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP120",
  //       "from": "Tirunelveli",
  //       "to": "Salem",
  //       "cargo": "Electronics",
  //       "loadWeight": 8.99,
  //       "startTime": "2025-02-22T17:45:24.875137",
  //       "endTime": "2025-04-06T17:45:24.875144",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.9,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D013",
  //   "name": "Vasanth Arun",
  //   "licenseNumber": "TN-65-908255",
  //   "phone": "+91-987651013",
  //   "assignedTruckId": "T013",
  //   "status": "inactive",
  //   "experienceYears": 17,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-09-02T17:45:24.875391",
  //       "score": 80,
  //       "instructor": {
  //         "name": "Mr. Karthik",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP130",
  //       "from": "Erode",
  //       "to": "Trichy",
  //       "cargo": "Textiles",
  //       "loadWeight": 9.46,
  //       "startTime": "2025-02-03T17:45:24.875426",
  //       "endTime": "2025-04-02T17:45:24.875463",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP131",
  //       "from": "Tirunelveli",
  //       "to": "Tirunelveli",
  //       "cargo": "Electronics",
  //       "loadWeight": 6.92,
  //       "startTime": "2025-02-02T17:45:24.875476",
  //       "endTime": "2025-04-07T17:45:24.875482",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 5.0,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D014",
  //   "name": "Balaji Saravanan",
  //   "licenseNumber": "TN-89-984055",
  //   "phone": "+91-987651014",
  //   "assignedTruckId": "T014",
  //   "status": "on-break",
  //   "experienceYears": 7,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-03-10T17:45:24.875635",
  //       "score": 83,
  //       "instructor": {
  //         "name": "Mr. Vignesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP140",
  //       "from": "Nagercoil",
  //       "to": "Madurai",
  //       "cargo": "Textiles",
  //       "loadWeight": 8.49,
  //       "startTime": "2025-02-01T17:45:24.875654",
  //       "endTime": "2025-04-01T17:45:24.875659",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.9,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP141",
  //       "from": "Tirunelveli",
  //       "to": "Chennai",
  //       "cargo": "Textiles",
  //       "loadWeight": 6.27,
  //       "startTime": "2025-01-14T17:45:24.875669",
  //       "endTime": "2025-04-06T17:45:24.875673",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D015",
  //   "name": "Rajesh Mohan",
  //   "licenseNumber": "TN-54-910639",
  //   "phone": "+91-987651015",
  //   "assignedTruckId": "T015",
  //   "status": "on-break",
  //   "experienceYears": 6,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-09-15T17:45:24.875687",
  //       "score": 89,
  //       "instructor": {
  //         "name": "Mr. Balaji",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP150",
  //       "from": "Erode",
  //       "to": "Tirunelveli",
  //       "cargo": "Fruits",
  //       "loadWeight": 3.87,
  //       "startTime": "2025-02-20T17:45:24.875698",
  //       "endTime": "2025-04-08T17:45:24.875703",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.3,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D016",
  //   "name": "Naveen Vignesh",
  //   "licenseNumber": "TN-61-405335",
  //   "phone": "+91-987651016",
  //   "assignedTruckId": "T016",
  //   "status": "on-break",
  //   "experienceYears": 15,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-07-15T17:45:24.875716",
  //       "score": 82,
  //       "instructor": {
  //         "name": "Mr. Kumar",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP160",
  //       "from": "Salem",
  //       "to": "Madurai",
  //       "cargo": "Textiles",
  //       "loadWeight": 5.49,
  //       "startTime": "2025-02-13T17:45:24.875727",
  //       "endTime": "2025-04-02T17:45:24.875731",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP161",
  //       "from": "Tirunelveli",
  //       "to": "Erode",
  //       "cargo": "Fruits",
  //       "loadWeight": 4.44,
  //       "startTime": "2025-01-28T17:45:24.875750",
  //       "endTime": "2025-03-11T17:45:24.875754",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.0,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP162",
  //       "from": "Salem",
  //       "to": "Salem",
  //       "cargo": "Electronics",
  //       "loadWeight": 7.5,
  //       "startTime": "2025-03-17T17:45:24.875763",
  //       "endTime": "2025-04-03T17:45:24.875767",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D017",
  //   "name": "Ramesh Kumar",
  //   "licenseNumber": "TN-87-699199",
  //   "phone": "+91-987651017",
  //   "assignedTruckId": "T017",
  //   "status": "on-duty",
  //   "experienceYears": 21,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-11-16T17:45:24.875781",
  //       "score": 92,
  //       "instructor": {
  //         "name": "Mr. Vignesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP170",
  //       "from": "Chennai",
  //       "to": "Salem",
  //       "cargo": "Electronics",
  //       "loadWeight": 8.76,
  //       "startTime": "2025-03-17T17:45:24.875796",
  //       "endTime": "2025-03-13T17:45:24.875803",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.8,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP171",
  //       "from": "Erode",
  //       "to": "Vellore",
  //       "cargo": "Cement",
  //       "loadWeight": 3.16,
  //       "startTime": "2025-01-30T17:45:24.875818",
  //       "endTime": "2025-03-29T17:45:24.875826",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP172",
  //       "from": "Coimbatore",
  //       "to": "Madurai",
  //       "cargo": "Cement",
  //       "loadWeight": 5.2,
  //       "startTime": "2025-01-17T17:45:24.875836",
  //       "endTime": "2025-03-25T17:45:24.875840",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.5,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D018",
  //   "name": "Saravanan Naveen",
  //   "licenseNumber": "TN-38-276051",
  //   "phone": "+91-987651018",
  //   "assignedTruckId": "T018",
  //   "status": "on-break",
  //   "experienceYears": 17,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-04-15T17:45:24.875854",
  //       "score": 95,
  //       "instructor": {
  //         "name": "Mr. Vignesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP180",
  //       "from": "Tirunelveli",
  //       "to": "Erode",
  //       "cargo": "Fruits",
  //       "loadWeight": 4.35,
  //       "startTime": "2025-03-29T17:45:24.875864",
  //       "endTime": "2025-04-01T17:45:24.875868",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP181",
  //       "from": "Erode",
  //       "to": "Vellore",
  //       "cargo": "Textiles",
  //       "loadWeight": 4.99,
  //       "startTime": "2025-03-14T17:45:24.875876",
  //       "endTime": "2025-03-16T17:45:24.875881",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP182",
  //       "from": "Madurai",
  //       "to": "Vellore",
  //       "cargo": "Electronics",
  //       "loadWeight": 6.87,
  //       "startTime": "2025-03-08T17:45:24.875889",
  //       "endTime": "2025-03-23T17:45:24.875893",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.7,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D019",
  //   "name": "Arun Arun",
  //   "licenseNumber": "TN-94-344210",
  //   "phone": "+91-987651019",
  //   "assignedTruckId": "T019",
  //   "status": "inactive",
  //   "experienceYears": 19,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-10-17T17:45:24.875905",
  //       "score": 91,
  //       "instructor": {
  //         "name": "Mr. Kumar",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP190",
  //       "from": "Salem",
  //       "to": "Nagercoil",
  //       "cargo": "Textiles",
  //       "loadWeight": 4.62,
  //       "startTime": "2025-01-17T17:45:24.875915",
  //       "endTime": "2025-03-24T17:45:24.875920",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP191",
  //       "from": "Salem",
  //       "to": "Erode",
  //       "cargo": "Textiles",
  //       "loadWeight": 7.01,
  //       "startTime": "2025-03-17T17:45:24.875928",
  //       "endTime": "2025-03-10T17:45:24.875932",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP192",
  //       "from": "Coimbatore",
  //       "to": "Nagercoil",
  //       "cargo": "Textiles",
  //       "loadWeight": 7.11,
  //       "startTime": "2025-03-19T17:45:24.875944",
  //       "endTime": "2025-04-05T17:45:24.875952",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D020",
  //   "name": "Sanjay Rajesh",
  //   "licenseNumber": "TN-61-446455",
  //   "phone": "+91-987651020",
  //   "assignedTruckId": "T020",
  //   "status": "on-trip",
  //   "experienceYears": 21,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-03-25T17:45:24.875983",
  //       "score": 98,
  //       "instructor": {
  //         "name": "Mr. Bharath",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP200",
  //       "from": "Salem",
  //       "to": "Madurai",
  //       "cargo": "Fruits",
  //       "loadWeight": 3.23,
  //       "startTime": "2025-04-09T17:45:24.875995",
  //       "endTime": "2025-03-23T17:45:24.875999",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.8,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D021",
  //   "name": "Prakash Dinesh",
  //   "licenseNumber": "TN-92-799554",
  //   "phone": "+91-987651021",
  //   "assignedTruckId": "T021",
  //   "status": "on-trip",
  //   "experienceYears": 12,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-05-03T17:45:24.876011",
  //       "score": 99,
  //       "instructor": {
  //         "name": "Mr. Arun",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP210",
  //       "from": "Salem",
  //       "to": "Erode",
  //       "cargo": "Electronics",
  //       "loadWeight": 5.85,
  //       "startTime": "2025-03-07T17:45:24.876021",
  //       "endTime": "2025-03-17T17:45:24.876026",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.8,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D022",
  //   "name": "Balaji Harish",
  //   "licenseNumber": "TN-56-966684",
  //   "phone": "+91-987651022",
  //   "assignedTruckId": "T022",
  //   "status": "on-break",
  //   "experienceYears": 13,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-05-01T17:45:24.876039",
  //       "score": 87,
  //       "instructor": {
  //         "name": "Mr. Balaji",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP220",
  //       "from": "Vellore",
  //       "to": "Erode",
  //       "cargo": "Textiles",
  //       "loadWeight": 6.52,
  //       "startTime": "2025-03-24T17:45:24.876049",
  //       "endTime": "2025-03-26T17:45:24.876054",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.7,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP221",
  //       "from": "Nagercoil",
  //       "to": "Vellore",
  //       "cargo": "Electronics",
  //       "loadWeight": 3.55,
  //       "startTime": "2025-02-28T17:45:24.876062",
  //       "endTime": "2025-03-19T17:45:24.876067",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.7,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP222",
  //       "from": "Vellore",
  //       "to": "Nagercoil",
  //       "cargo": "Cement",
  //       "loadWeight": 5.7,
  //       "startTime": "2025-01-16T17:45:24.876080",
  //       "endTime": "2025-03-15T17:45:24.876087",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.5,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D023",
  //   "name": "Saravanan Elango",
  //   "licenseNumber": "TN-25-267738",
  //   "phone": "+91-987651023",
  //   "assignedTruckId": "T023",
  //   "status": "on-break",
  //   "experienceYears": 8,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-11-06T17:45:24.876107",
  //       "score": 80,
  //       "instructor": {
  //         "name": "Mr. Prakash",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP230",
  //       "from": "Erode",
  //       "to": "Chennai",
  //       "cargo": "Cement",
  //       "loadWeight": 4.04,
  //       "startTime": "2025-02-17T17:45:24.876128",
  //       "endTime": "2025-04-07T17:45:24.876132",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.2,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP231",
  //       "from": "Salem",
  //       "to": "Coimbatore",
  //       "cargo": "Electronics",
  //       "loadWeight": 6.55,
  //       "startTime": "2025-01-31T17:45:24.876141",
  //       "endTime": "2025-03-11T17:45:24.876145",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.9,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP232",
  //       "from": "Chennai",
  //       "to": "Coimbatore",
  //       "cargo": "Textiles",
  //       "loadWeight": 8.33,
  //       "startTime": "2025-03-08T17:45:24.876153",
  //       "endTime": "2025-04-06T17:45:24.876157",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.1,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D024",
  //   "name": "Sathish Bharath",
  //   "licenseNumber": "TN-66-986612",
  //   "phone": "+91-987651024",
  //   "assignedTruckId": "T024",
  //   "status": "inactive",
  //   "experienceYears": 12,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-09-14T17:45:24.876170",
  //       "score": 100,
  //       "instructor": {
  //         "name": "Mr. Bharath",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP240",
  //       "from": "Salem",
  //       "to": "Vellore",
  //       "cargo": "Textiles",
  //       "loadWeight": 5.6,
  //       "startTime": "2025-03-12T17:45:24.876182",
  //       "endTime": "2025-03-27T17:45:24.876187",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 5.0,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP241",
  //       "from": "Coimbatore",
  //       "to": "Tirunelveli",
  //       "cargo": "Textiles",
  //       "loadWeight": 7.36,
  //       "startTime": "2025-02-25T17:45:24.876196",
  //       "endTime": "2025-03-24T17:45:24.876200",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP242",
  //       "from": "Erode",
  //       "to": "Trichy",
  //       "cargo": "Cement",
  //       "loadWeight": 3.75,
  //       "startTime": "2025-04-03T17:45:24.876208",
  //       "endTime": "2025-04-08T17:45:24.876213",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D025",
  //   "name": "Naveen Naveen",
  //   "licenseNumber": "TN-68-316551",
  //   "phone": "+91-987651025",
  //   "assignedTruckId": "T025",
  //   "status": "inactive",
  //   "experienceYears": 20,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-03-10T17:45:24.876225",
  //       "score": 91,
  //       "instructor": {
  //         "name": "Mr. Saravanan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP250",
  //       "from": "Trichy",
  //       "to": "Vellore",
  //       "cargo": "Fruits",
  //       "loadWeight": 8.33,
  //       "startTime": "2025-03-09T17:45:24.876234",
  //       "endTime": "2025-03-23T17:45:24.876239",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.9,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP251",
  //       "from": "Coimbatore",
  //       "to": "Trichy",
  //       "cargo": "Electronics",
  //       "loadWeight": 9.58,
  //       "startTime": "2025-02-08T17:45:24.876248",
  //       "endTime": "2025-03-23T17:45:24.876253",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.9,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP252",
  //       "from": "Erode",
  //       "to": "Salem",
  //       "cargo": "Fruits",
  //       "loadWeight": 9.88,
  //       "startTime": "2025-01-26T17:45:24.876261",
  //       "endTime": "2025-03-15T17:45:24.876266",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D026",
  //   "name": "Balaji Saravanan",
  //   "licenseNumber": "TN-80-194299",
  //   "phone": "+91-987651026",
  //   "assignedTruckId": "T026",
  //   "status": "inactive",
  //   "experienceYears": 11,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-12-02T17:45:24.876286",
  //       "score": 89,
  //       "instructor": {
  //         "name": "Mr. Sathish",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP260",
  //       "from": "Chennai",
  //       "to": "Erode",
  //       "cargo": "Electronics",
  //       "loadWeight": 9.04,
  //       "startTime": "2025-01-29T17:45:24.876302",
  //       "endTime": "2025-04-05T17:45:24.876307",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.2,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP261",
  //       "from": "Salem",
  //       "to": "Coimbatore",
  //       "cargo": "Fruits",
  //       "loadWeight": 4.9,
  //       "startTime": "2025-02-11T17:45:24.876316",
  //       "endTime": "2025-03-19T17:45:24.876320",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D027",
  //   "name": "Sathish Balaji",
  //   "licenseNumber": "TN-62-976782",
  //   "phone": "+91-987651027",
  //   "assignedTruckId": "T027",
  //   "status": "on-duty",
  //   "experienceYears": 17,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-03-28T17:45:24.876332",
  //       "score": 91,
  //       "instructor": {
  //         "name": "Mr. Vasanth",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP270",
  //       "from": "Chennai",
  //       "to": "Salem",
  //       "cargo": "Electronics",
  //       "loadWeight": 5.24,
  //       "startTime": "2025-02-01T17:45:24.876342",
  //       "endTime": "2025-03-19T17:45:24.876346",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP271",
  //       "from": "Trichy",
  //       "to": "Tirunelveli",
  //       "cargo": "Fruits",
  //       "loadWeight": 5.35,
  //       "startTime": "2025-04-06T17:45:24.876355",
  //       "endTime": "2025-04-09T17:45:24.876359",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D028",
  //   "name": "Kumar Elango",
  //   "licenseNumber": "TN-23-302935",
  //   "phone": "+91-987651028",
  //   "assignedTruckId": "T028",
  //   "status": "on-trip",
  //   "experienceYears": 4,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-03-21T17:45:24.876371",
  //       "score": 91,
  //       "instructor": {
  //         "name": "Mr. Elango",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP280",
  //       "from": "Chennai",
  //       "to": "Erode",
  //       "cargo": "Textiles",
  //       "loadWeight": 7.15,
  //       "startTime": "2025-01-16T17:45:24.876381",
  //       "endTime": "2025-03-25T17:45:24.876385",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.8,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D029",
  //   "name": "Sanjay Harish",
  //   "licenseNumber": "TN-82-582277",
  //   "phone": "+91-987651029",
  //   "assignedTruckId": "T029",
  //   "status": "on-trip",
  //   "experienceYears": 22,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-09-21T17:45:24.876397",
  //       "score": 95,
  //       "instructor": {
  //         "name": "Mr. Kumar",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP290",
  //       "from": "Tirunelveli",
  //       "to": "Vellore",
  //       "cargo": "Electronics",
  //       "loadWeight": 4.67,
  //       "startTime": "2025-03-12T17:45:24.876406",
  //       "endTime": "2025-03-10T17:45:24.876412",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.0,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D030",
  //   "name": "Dinesh Karthik",
  //   "licenseNumber": "TN-65-873104",
  //   "phone": "+91-987651030",
  //   "assignedTruckId": "T030",
  //   "status": "inactive",
  //   "experienceYears": 25,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-01-07T17:45:24.876424",
  //       "score": 96,
  //       "instructor": {
  //         "name": "Mr. Sanjay",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP300",
  //       "from": "Tirunelveli",
  //       "to": "Vellore",
  //       "cargo": "Textiles",
  //       "loadWeight": 4.12,
  //       "startTime": "2025-01-16T17:45:24.876434",
  //       "endTime": "2025-03-29T17:45:24.876438",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP301",
  //       "from": "Vellore",
  //       "to": "Vellore",
  //       "cargo": "Fruits",
  //       "loadWeight": 3.9,
  //       "startTime": "2025-01-21T17:45:24.876447",
  //       "endTime": "2025-03-26T17:45:24.876451",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.8,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D031",
  //   "name": "Saravanan Saravanan",
  //   "licenseNumber": "TN-35-992293",
  //   "phone": "+91-987651031",
  //   "assignedTruckId": "T031",
  //   "status": "on-trip",
  //   "experienceYears": 18,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-10-09T17:45:24.876463",
  //       "score": 82,
  //       "instructor": {
  //         "name": "Mr. Murugan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP310",
  //       "from": "Erode",
  //       "to": "Nagercoil",
  //       "cargo": "Textiles",
  //       "loadWeight": 3.74,
  //       "startTime": "2025-03-23T17:45:24.876473",
  //       "endTime": "2025-03-27T17:45:24.876478",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.0,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP311",
  //       "from": "Erode",
  //       "to": "Chennai",
  //       "cargo": "Electronics",
  //       "loadWeight": 7.85,
  //       "startTime": "2025-03-02T17:45:24.876486",
  //       "endTime": "2025-03-16T17:45:24.876490",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 5.0,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D032",
  //   "name": "Murugan Karthik",
  //   "licenseNumber": "TN-18-701980",
  //   "phone": "+91-987651032",
  //   "assignedTruckId": "T032",
  //   "status": "on-trip",
  //   "experienceYears": 2,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-01-26T17:45:24.876510",
  //       "score": 98,
  //       "instructor": {
  //         "name": "Mr. Prakash",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP320",
  //       "from": "Chennai",
  //       "to": "Erode",
  //       "cargo": "Electronics",
  //       "loadWeight": 3.57,
  //       "startTime": "2025-03-26T17:45:24.876534",
  //       "endTime": "2025-03-27T17:45:24.876539",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D033",
  //   "name": "Harish Bharath",
  //   "licenseNumber": "TN-69-313394",
  //   "phone": "+91-987651033",
  //   "assignedTruckId": "T033",
  //   "status": "on-trip",
  //   "experienceYears": 2,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-02-24T17:45:24.876554",
  //       "score": 98,
  //       "instructor": {
  //         "name": "Mr. Sanjay",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP330",
  //       "from": "Tirunelveli",
  //       "to": "Madurai",
  //       "cargo": "Electronics",
  //       "loadWeight": 8.25,
  //       "startTime": "2025-04-08T17:45:24.876570",
  //       "endTime": "2025-04-05T17:45:24.876587",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D034",
  //   "name": "Murugan Bharath",
  //   "licenseNumber": "TN-90-415927",
  //   "phone": "+91-987651034",
  //   "assignedTruckId": "T034",
  //   "status": "on-duty",
  //   "experienceYears": 14,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-11-25T17:45:24.876600",
  //       "score": 81,
  //       "instructor": {
  //         "name": "Mr. Ramesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP340",
  //       "from": "Nagercoil",
  //       "to": "Madurai",
  //       "cargo": "Electronics",
  //       "loadWeight": 4.21,
  //       "startTime": "2025-02-08T17:45:24.876611",
  //       "endTime": "2025-03-31T17:45:24.876616",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.5,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP341",
  //       "from": "Vellore",
  //       "to": "Coimbatore",
  //       "cargo": "Textiles",
  //       "loadWeight": 9.43,
  //       "startTime": "2025-04-03T17:45:24.876624",
  //       "endTime": "2025-03-30T17:45:24.876628",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.2,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP342",
  //       "from": "Tirunelveli",
  //       "to": "Madurai",
  //       "cargo": "Electronics",
  //       "loadWeight": 4.48,
  //       "startTime": "2025-03-17T17:45:24.876636",
  //       "endTime": "2025-03-25T17:45:24.876641",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D035",
  //   "name": "Elango Prakash",
  //   "licenseNumber": "TN-57-208868",
  //   "phone": "+91-987651035",
  //   "assignedTruckId": "T035",
  //   "status": "on-duty",
  //   "experienceYears": 16,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-10-17T17:45:24.876652",
  //       "score": 86,
  //       "instructor": {
  //         "name": "Mr. Naveen",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP350",
  //       "from": "Nagercoil",
  //       "to": "Chennai",
  //       "cargo": "Textiles",
  //       "loadWeight": 7.34,
  //       "startTime": "2025-02-02T17:45:24.876662",
  //       "endTime": "2025-03-23T17:45:24.876666",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.8,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP351",
  //       "from": "Vellore",
  //       "to": "Coimbatore",
  //       "cargo": "Fruits",
  //       "loadWeight": 9.52,
  //       "startTime": "2025-03-12T17:45:24.876675",
  //       "endTime": "2025-03-31T17:45:24.876679",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D036",
  //   "name": "Naveen Ramesh",
  //   "licenseNumber": "TN-97-427864",
  //   "phone": "+91-987651036",
  //   "assignedTruckId": "T036",
  //   "status": "inactive",
  //   "experienceYears": 8,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-09-18T17:45:24.876690",
  //       "score": 99,
  //       "instructor": {
  //         "name": "Mr. Bharath",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP360",
  //       "from": "Nagercoil",
  //       "to": "Coimbatore",
  //       "cargo": "Textiles",
  //       "loadWeight": 3.99,
  //       "startTime": "2025-03-03T17:45:24.876700",
  //       "endTime": "2025-03-18T17:45:24.876704",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.9,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP361",
  //       "from": "Salem",
  //       "to": "Tirunelveli",
  //       "cargo": "Electronics",
  //       "loadWeight": 9.63,
  //       "startTime": "2025-02-26T17:45:24.876713",
  //       "endTime": "2025-03-27T17:45:24.876717",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.3,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP362",
  //       "from": "Erode",
  //       "to": "Salem",
  //       "cargo": "Fruits",
  //       "loadWeight": 8.56,
  //       "startTime": "2025-03-26T17:45:24.876729",
  //       "endTime": "2025-03-31T17:45:24.876736",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.8,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D037",
  //   "name": "Vasanth Bharath",
  //   "licenseNumber": "TN-19-624075",
  //   "phone": "+91-987651037",
  //   "assignedTruckId": "T037",
  //   "status": "inactive",
  //   "experienceYears": 5,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-03-21T17:45:24.876756",
  //       "score": 88,
  //       "instructor": {
  //         "name": "Mr. Arun",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP370",
  //       "from": "Nagercoil",
  //       "to": "Chennai",
  //       "cargo": "Fruits",
  //       "loadWeight": 7.55,
  //       "startTime": "2025-01-23T17:45:24.876773",
  //       "endTime": "2025-03-30T17:45:24.876781",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP371",
  //       "from": "Chennai",
  //       "to": "Madurai",
  //       "cargo": "Electronics",
  //       "loadWeight": 7.56,
  //       "startTime": "2025-02-01T17:45:24.876789",
  //       "endTime": "2025-03-19T17:45:24.876793",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.8,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP372",
  //       "from": "Tirunelveli",
  //       "to": "Vellore",
  //       "cargo": "Electronics",
  //       "loadWeight": 4.15,
  //       "startTime": "2025-03-29T17:45:24.876802",
  //       "endTime": "2025-03-27T17:45:24.876807",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D038",
  //   "name": "Murugan Elango",
  //   "licenseNumber": "TN-27-385894",
  //   "phone": "+91-987651038",
  //   "assignedTruckId": "T038",
  //   "status": "on-break",
  //   "experienceYears": 23,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-06-28T17:45:24.876818",
  //       "score": 87,
  //       "instructor": {
  //         "name": "Mr. Bharath",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP380",
  //       "from": "Tirunelveli",
  //       "to": "Salem",
  //       "cargo": "Fruits",
  //       "loadWeight": 7.2,
  //       "startTime": "2025-03-26T17:45:24.876828",
  //       "endTime": "2025-04-02T17:45:24.876833",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.9,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP381",
  //       "from": "Trichy",
  //       "to": "Nagercoil",
  //       "cargo": "Cement",
  //       "loadWeight": 8.31,
  //       "startTime": "2025-02-04T17:45:24.876841",
  //       "endTime": "2025-04-02T17:45:24.876845",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.8,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP382",
  //       "from": "Coimbatore",
  //       "to": "Erode",
  //       "cargo": "Fruits",
  //       "loadWeight": 4.48,
  //       "startTime": "2025-02-22T17:45:24.876854",
  //       "endTime": "2025-03-11T17:45:24.876858",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.8,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D039",
  //   "name": "Ramesh Vignesh",
  //   "licenseNumber": "TN-66-794178",
  //   "phone": "+91-987651039",
  //   "assignedTruckId": "T039",
  //   "status": "on-duty",
  //   "experienceYears": 19,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-05-12T17:45:24.876873",
  //       "score": 91,
  //       "instructor": {
  //         "name": "Mr. Saravanan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP390",
  //       "from": "Erode",
  //       "to": "Coimbatore",
  //       "cargo": "Electronics",
  //       "loadWeight": 7.04,
  //       "startTime": "2025-03-02T17:45:24.876890",
  //       "endTime": "2025-03-28T17:45:24.876898",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.8,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP391",
  //       "from": "Chennai",
  //       "to": "Salem",
  //       "cargo": "Electronics",
  //       "loadWeight": 4.0,
  //       "startTime": "2025-03-24T17:45:24.876911",
  //       "endTime": "2025-03-12T17:45:24.876917",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.9,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D040",
  //   "name": "Murugan Sathish",
  //   "licenseNumber": "TN-59-563383",
  //   "phone": "+91-987651040",
  //   "assignedTruckId": "T040",
  //   "status": "on-trip",
  //   "experienceYears": 7,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-12-01T17:45:24.876929",
  //       "score": 90,
  //       "instructor": {
  //         "name": "Mr. Ramesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP400",
  //       "from": "Coimbatore",
  //       "to": "Chennai",
  //       "cargo": "Textiles",
  //       "loadWeight": 3.29,
  //       "startTime": "2025-01-21T17:45:24.876940",
  //       "endTime": "2025-03-30T17:45:24.876945",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.9,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D041",
  //   "name": "Vignesh Mohan",
  //   "licenseNumber": "TN-22-371603",
  //   "phone": "+91-987651041",
  //   "assignedTruckId": "T041",
  //   "status": "on-trip",
  //   "experienceYears": 23,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-03-27T17:45:24.876959",
  //       "score": 89,
  //       "instructor": {
  //         "name": "Mr. Prakash",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP410",
  //       "from": "Vellore",
  //       "to": "Vellore",
  //       "cargo": "Fruits",
  //       "loadWeight": 5.8,
  //       "startTime": "2025-04-01T17:45:24.876969",
  //       "endTime": "2025-03-17T17:45:24.876974",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP411",
  //       "from": "Salem",
  //       "to": "Chennai",
  //       "cargo": "Textiles",
  //       "loadWeight": 7.3,
  //       "startTime": "2025-03-26T17:45:24.876983",
  //       "endTime": "2025-03-11T17:45:24.876987",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP412",
  //       "from": "Erode",
  //       "to": "Salem",
  //       "cargo": "Textiles",
  //       "loadWeight": 6.63,
  //       "startTime": "2025-01-31T17:45:24.876995",
  //       "endTime": "2025-03-16T17:45:24.877000",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.7,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D042",
  //   "name": "Sanjay Rajesh",
  //   "licenseNumber": "TN-22-378474",
  //   "phone": "+91-987651042",
  //   "assignedTruckId": "T042",
  //   "status": "inactive",
  //   "experienceYears": 21,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-12-24T17:45:24.877012",
  //       "score": 92,
  //       "instructor": {
  //         "name": "Mr. Elango",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP420",
  //       "from": "Coimbatore",
  //       "to": "Coimbatore",
  //       "cargo": "Textiles",
  //       "loadWeight": 3.09,
  //       "startTime": "2025-02-03T17:45:24.877025",
  //       "endTime": "2025-03-11T17:45:24.877032",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.8,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D043",
  //   "name": "Ramesh Karthik",
  //   "licenseNumber": "TN-61-703405",
  //   "phone": "+91-987651043",
  //   "assignedTruckId": "T043",
  //   "status": "on-duty",
  //   "experienceYears": 2,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-03-24T17:45:24.877051",
  //       "score": 96,
  //       "instructor": {
  //         "name": "Mr. Harish",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP430",
  //       "from": "Chennai",
  //       "to": "Erode",
  //       "cargo": "Electronics",
  //       "loadWeight": 9.57,
  //       "startTime": "2025-01-27T17:45:24.877065",
  //       "endTime": "2025-04-01T17:45:24.877069",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.1,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP431",
  //       "from": "Nagercoil",
  //       "to": "Salem",
  //       "cargo": "Textiles",
  //       "loadWeight": 9.75,
  //       "startTime": "2025-04-06T17:45:24.877077",
  //       "endTime": "2025-04-07T17:45:24.877081",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.0,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D044",
  //   "name": "Suresh Vignesh",
  //   "licenseNumber": "TN-87-142528",
  //   "phone": "+91-987651044",
  //   "assignedTruckId": "T044",
  //   "status": "inactive",
  //   "experienceYears": 18,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-08-31T17:45:24.877094",
  //       "score": 96,
  //       "instructor": {
  //         "name": "Mr. Saravanan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP440",
  //       "from": "Erode",
  //       "to": "Salem",
  //       "cargo": "Cement",
  //       "loadWeight": 5.94,
  //       "startTime": "2025-03-25T17:45:24.877104",
  //       "endTime": "2025-03-26T17:45:24.877109",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP441",
  //       "from": "Trichy",
  //       "to": "Vellore",
  //       "cargo": "Textiles",
  //       "loadWeight": 8.8,
  //       "startTime": "2025-03-17T17:45:24.877117",
  //       "endTime": "2025-04-03T17:45:24.877122",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.7,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D045",
  //   "name": "Harish Ramesh",
  //   "licenseNumber": "TN-39-945864",
  //   "phone": "+91-987651045",
  //   "assignedTruckId": "T045",
  //   "status": "on-trip",
  //   "experienceYears": 18,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-01-16T17:45:24.877133",
  //       "score": 87,
  //       "instructor": {
  //         "name": "Mr. Harish",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP450",
  //       "from": "Coimbatore",
  //       "to": "Nagercoil",
  //       "cargo": "Fruits",
  //       "loadWeight": 6.27,
  //       "startTime": "2025-02-02T17:45:24.877143",
  //       "endTime": "2025-03-20T17:45:24.877147",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP451",
  //       "from": "Trichy",
  //       "to": "Tirunelveli",
  //       "cargo": "Cement",
  //       "loadWeight": 8.43,
  //       "startTime": "2025-02-20T17:45:24.877156",
  //       "endTime": "2025-03-29T17:45:24.877163",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.5,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D046",
  //   "name": "Balaji Dinesh",
  //   "licenseNumber": "TN-60-750447",
  //   "phone": "+91-987651046",
  //   "assignedTruckId": "T046",
  //   "status": "on-break",
  //   "experienceYears": 21,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-03-09T17:45:24.877182",
  //       "score": 81,
  //       "instructor": {
  //         "name": "Mr. Sanjay",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP460",
  //       "from": "Vellore",
  //       "to": "Erode",
  //       "cargo": "Electronics",
  //       "loadWeight": 7.93,
  //       "startTime": "2025-01-20T17:45:24.877200",
  //       "endTime": "2025-03-20T17:45:24.877205",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.1,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP461",
  //       "from": "Madurai",
  //       "to": "Chennai",
  //       "cargo": "Fruits",
  //       "loadWeight": 9.0,
  //       "startTime": "2025-03-18T17:45:24.877214",
  //       "endTime": "2025-04-07T17:45:24.877218",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.2,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D047",
  //   "name": "Saravanan Karthik",
  //   "licenseNumber": "TN-40-603341",
  //   "phone": "+91-987651047",
  //   "assignedTruckId": "T047",
  //   "status": "on-duty",
  //   "experienceYears": 25,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-01-01T17:45:24.877230",
  //       "score": 84,
  //       "instructor": {
  //         "name": "Mr. Elango",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP470",
  //       "from": "Trichy",
  //       "to": "Chennai",
  //       "cargo": "Cement",
  //       "loadWeight": 5.8,
  //       "startTime": "2025-03-23T17:45:24.877241",
  //       "endTime": "2025-04-06T17:45:24.877246",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.8,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP471",
  //       "from": "Madurai",
  //       "to": "Madurai",
  //       "cargo": "Cement",
  //       "loadWeight": 8.08,
  //       "startTime": "2025-01-16T17:45:24.877254",
  //       "endTime": "2025-04-04T17:45:24.877258",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D048",
  //   "name": "Kumar Saravanan",
  //   "licenseNumber": "TN-65-515993",
  //   "phone": "+91-987651048",
  //   "assignedTruckId": "T048",
  //   "status": "inactive",
  //   "experienceYears": 18,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-12-09T17:45:24.877270",
  //       "score": 88,
  //       "instructor": {
  //         "name": "Mr. Naveen",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP480",
  //       "from": "Chennai",
  //       "to": "Chennai",
  //       "cargo": "Fruits",
  //       "loadWeight": 4.06,
  //       "startTime": "2025-03-11T17:45:24.877280",
  //       "endTime": "2025-03-23T17:45:24.877284",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.7,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D049",
  //   "name": "Vasanth Mohan",
  //   "licenseNumber": "TN-82-543772",
  //   "phone": "+91-987651049",
  //   "assignedTruckId": "T049",
  //   "status": "on-duty",
  //   "experienceYears": 12,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-05-24T17:45:24.877295",
  //       "score": 81,
  //       "instructor": {
  //         "name": "Mr. Dinesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP490",
  //       "from": "Trichy",
  //       "to": "Vellore",
  //       "cargo": "Cement",
  //       "loadWeight": 9.05,
  //       "startTime": "2025-02-19T17:45:24.877305",
  //       "endTime": "2025-03-16T17:45:24.877310",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.9,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP491",
  //       "from": "Nagercoil",
  //       "to": "Tirunelveli",
  //       "cargo": "Textiles",
  //       "loadWeight": 8.55,
  //       "startTime": "2025-03-23T17:45:24.877318",
  //       "endTime": "2025-04-03T17:45:24.877323",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.8,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP492",
  //       "from": "Vellore",
  //       "to": "Coimbatore",
  //       "cargo": "Electronics",
  //       "loadWeight": 6.33,
  //       "startTime": "2025-02-14T17:45:24.877332",
  //       "endTime": "2025-03-20T17:45:24.877336",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D050",
  //   "name": "Rajesh Murugan",
  //   "licenseNumber": "TN-70-233625",
  //   "phone": "+91-987651050",
  //   "assignedTruckId": "T050",
  //   "status": "on-trip",
  //   "experienceYears": 7,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-10-19T17:45:24.877348",
  //       "score": 97,
  //       "instructor": {
  //         "name": "Mr. Prakash",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP500",
  //       "from": "Trichy",
  //       "to": "Vellore",
  //       "cargo": "Textiles",
  //       "loadWeight": 4.11,
  //       "startTime": "2025-03-10T17:45:24.877363",
  //       "endTime": "2025-03-16T17:45:24.877370",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.5,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP501",
  //       "from": "Coimbatore",
  //       "to": "Salem",
  //       "cargo": "Cement",
  //       "loadWeight": 4.45,
  //       "startTime": "2025-01-22T17:45:24.877382",
  //       "endTime": "2025-03-11T17:45:24.877387",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D051",
  //   "name": "Arun Karthik",
  //   "licenseNumber": "TN-81-258163",
  //   "phone": "+91-987651051",
  //   "assignedTruckId": "T051",
  //   "status": "on-break",
  //   "experienceYears": 10,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-10-14T17:45:24.877399",
  //       "score": 90,
  //       "instructor": {
  //         "name": "Mr. Kumar",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP510",
  //       "from": "Chennai",
  //       "to": "Vellore",
  //       "cargo": "Electronics",
  //       "loadWeight": 5.76,
  //       "startTime": "2025-03-24T17:45:24.877408",
  //       "endTime": "2025-03-18T17:45:24.877413",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.8,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D052",
  //   "name": "Arun Suresh",
  //   "licenseNumber": "TN-22-233083",
  //   "phone": "+91-987651052",
  //   "assignedTruckId": "T052",
  //   "status": "on-duty",
  //   "experienceYears": 21,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-06-26T17:45:24.877424",
  //       "score": 97,
  //       "instructor": {
  //         "name": "Mr. Bharath",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP520",
  //       "from": "Nagercoil",
  //       "to": "Nagercoil",
  //       "cargo": "Cement",
  //       "loadWeight": 9.42,
  //       "startTime": "2025-01-11T17:45:24.877434",
  //       "endTime": "2025-04-05T17:45:24.877439",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.7,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D053",
  //   "name": "Prakash Elango",
  //   "licenseNumber": "TN-76-348635",
  //   "phone": "+91-987651053",
  //   "assignedTruckId": "T053",
  //   "status": "on-trip",
  //   "experienceYears": 23,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-03-23T17:45:24.877450",
  //       "score": 100,
  //       "instructor": {
  //         "name": "Mr. Rajesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP530",
  //       "from": "Trichy",
  //       "to": "Nagercoil",
  //       "cargo": "Cement",
  //       "loadWeight": 6.32,
  //       "startTime": "2025-04-07T17:45:24.877461",
  //       "endTime": "2025-03-13T17:45:24.877465",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.9,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP531",
  //       "from": "Vellore",
  //       "to": "Coimbatore",
  //       "cargo": "Cement",
  //       "loadWeight": 5.61,
  //       "startTime": "2025-01-22T17:45:24.877474",
  //       "endTime": "2025-04-08T17:45:24.877478",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.0,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP532",
  //       "from": "Salem",
  //       "to": "Chennai",
  //       "cargo": "Fruits",
  //       "loadWeight": 3.61,
  //       "startTime": "2025-03-30T17:45:24.877486",
  //       "endTime": "2025-03-14T17:45:24.877490",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.9,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D054",
  //   "name": "Mohan Mohan",
  //   "licenseNumber": "TN-18-396846",
  //   "phone": "+91-987651054",
  //   "assignedTruckId": "T054",
  //   "status": "on-trip",
  //   "experienceYears": 2,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-03-12T17:45:24.877502",
  //       "score": 86,
  //       "instructor": {
  //         "name": "Mr. Saravanan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP540",
  //       "from": "Coimbatore",
  //       "to": "Madurai",
  //       "cargo": "Textiles",
  //       "loadWeight": 5.71,
  //       "startTime": "2025-04-06T17:45:24.877512",
  //       "endTime": "2025-03-29T17:45:24.877516",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP541",
  //       "from": "Coimbatore",
  //       "to": "Erode",
  //       "cargo": "Textiles",
  //       "loadWeight": 5.4,
  //       "startTime": "2025-01-12T17:45:24.877524",
  //       "endTime": "2025-04-07T17:45:24.877528",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.8,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D055",
  //   "name": "Karthik Ramesh",
  //   "licenseNumber": "TN-92-251133",
  //   "phone": "+91-987651055",
  //   "assignedTruckId": "T055",
  //   "status": "inactive",
  //   "experienceYears": 11,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-11-13T17:45:24.877540",
  //       "score": 98,
  //       "instructor": {
  //         "name": "Mr. Saravanan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP550",
  //       "from": "Chennai",
  //       "to": "Salem",
  //       "cargo": "Cement",
  //       "loadWeight": 6.84,
  //       "startTime": "2025-02-06T17:45:24.877550",
  //       "endTime": "2025-03-28T17:45:24.877554",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP551",
  //       "from": "Salem",
  //       "to": "Tirunelveli",
  //       "cargo": "Textiles",
  //       "loadWeight": 7.53,
  //       "startTime": "2025-04-03T17:45:24.877562",
  //       "endTime": "2025-03-20T17:45:24.877567",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP552",
  //       "from": "Salem",
  //       "to": "Nagercoil",
  //       "cargo": "Textiles",
  //       "loadWeight": 9.79,
  //       "startTime": "2025-01-14T17:45:24.877575",
  //       "endTime": "2025-04-07T17:45:24.877579",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D056",
  //   "name": "Kumar Vignesh",
  //   "licenseNumber": "TN-36-977540",
  //   "phone": "+91-987651056",
  //   "assignedTruckId": "T056",
  //   "status": "inactive",
  //   "experienceYears": 3,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-09-16T17:45:24.877597",
  //       "score": 99,
  //       "instructor": {
  //         "name": "Mr. Naveen",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP560",
  //       "from": "Chennai",
  //       "to": "Trichy",
  //       "cargo": "Cement",
  //       "loadWeight": 6.79,
  //       "startTime": "2025-02-20T17:45:24.877613",
  //       "endTime": "2025-04-04T17:45:24.877618",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP561",
  //       "from": "Chennai",
  //       "to": "Nagercoil",
  //       "cargo": "Cement",
  //       "loadWeight": 9.05,
  //       "startTime": "2025-02-09T17:45:24.877627",
  //       "endTime": "2025-03-25T17:45:24.877632",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.2,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D057",
  //   "name": "Suresh Balaji",
  //   "licenseNumber": "TN-91-576260",
  //   "phone": "+91-987651057",
  //   "assignedTruckId": "T057",
  //   "status": "on-break",
  //   "experienceYears": 18,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-01-18T17:45:24.877644",
  //       "score": 85,
  //       "instructor": {
  //         "name": "Mr. Sanjay",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP570",
  //       "from": "Chennai",
  //       "to": "Chennai",
  //       "cargo": "Textiles",
  //       "loadWeight": 9.47,
  //       "startTime": "2025-01-09T17:45:24.877653",
  //       "endTime": "2025-03-30T17:45:24.877657",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.1,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP571",
  //       "from": "Trichy",
  //       "to": "Coimbatore",
  //       "cargo": "Cement",
  //       "loadWeight": 5.95,
  //       "startTime": "2025-01-12T17:45:24.877666",
  //       "endTime": "2025-03-10T17:45:24.877670",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D058",
  //   "name": "Balaji Naveen",
  //   "licenseNumber": "TN-17-373865",
  //   "phone": "+91-987651058",
  //   "assignedTruckId": "T058",
  //   "status": "on-trip",
  //   "experienceYears": 8,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-04-30T17:45:24.877682",
  //       "score": 96,
  //       "instructor": {
  //         "name": "Mr. Vignesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP580",
  //       "from": "Nagercoil",
  //       "to": "Tirunelveli",
  //       "cargo": "Textiles",
  //       "loadWeight": 6.11,
  //       "startTime": "2025-01-25T17:45:24.877692",
  //       "endTime": "2025-04-04T17:45:24.877696",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.2,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP581",
  //       "from": "Chennai",
  //       "to": "Coimbatore",
  //       "cargo": "Cement",
  //       "loadWeight": 8.31,
  //       "startTime": "2025-01-15T17:45:24.877705",
  //       "endTime": "2025-03-19T17:45:24.877709",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.2,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP582",
  //       "from": "Coimbatore",
  //       "to": "Chennai",
  //       "cargo": "Electronics",
  //       "loadWeight": 7.81,
  //       "startTime": "2025-02-25T17:45:24.877717",
  //       "endTime": "2025-03-26T17:45:24.877722",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.8,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D059",
  //   "name": "Rajesh Dinesh",
  //   "licenseNumber": "TN-29-723785",
  //   "phone": "+91-987651059",
  //   "assignedTruckId": "T059",
  //   "status": "on-trip",
  //   "experienceYears": 2,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-09-09T17:45:24.877733",
  //       "score": 83,
  //       "instructor": {
  //         "name": "Mr. Balaji",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP590",
  //       "from": "Salem",
  //       "to": "Vellore",
  //       "cargo": "Textiles",
  //       "loadWeight": 9.16,
  //       "startTime": "2025-01-26T17:45:24.877743",
  //       "endTime": "2025-03-24T17:45:24.877748",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP591",
  //       "from": "Erode",
  //       "to": "Trichy",
  //       "cargo": "Fruits",
  //       "loadWeight": 6.82,
  //       "startTime": "2025-04-01T17:45:24.877756",
  //       "endTime": "2025-03-15T17:45:24.877760",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.0,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP592",
  //       "from": "Tirunelveli",
  //       "to": "Trichy",
  //       "cargo": "Cement",
  //       "loadWeight": 4.96,
  //       "startTime": "2025-01-17T17:45:24.877769",
  //       "endTime": "2025-03-30T17:45:24.877773",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.0,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D060",
  //   "name": "Mohan Mohan",
  //   "licenseNumber": "TN-20-682230",
  //   "phone": "+91-987651060",
  //   "assignedTruckId": "T060",
  //   "status": "inactive",
  //   "experienceYears": 11,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-04-16T17:45:24.877786",
  //       "score": 97,
  //       "instructor": {
  //         "name": "Mr. Bharath",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP600",
  //       "from": "Salem",
  //       "to": "Nagercoil",
  //       "cargo": "Fruits",
  //       "loadWeight": 6.61,
  //       "startTime": "2025-02-28T17:45:24.877796",
  //       "endTime": "2025-03-19T17:45:24.877800",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.9,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D061",
  //   "name": "Kumar Suresh",
  //   "licenseNumber": "TN-70-840520",
  //   "phone": "+91-987651061",
  //   "assignedTruckId": null,
  //   "status": "on-duty",
  //   "experienceYears": 5,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-07-18T17:45:24.877812",
  //       "score": 93,
  //       "instructor": {
  //         "name": "Mr. Sathish",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP610",
  //       "from": "Chennai",
  //       "to": "Salem",
  //       "cargo": "Cement",
  //       "loadWeight": 7.48,
  //       "startTime": "2025-02-04T17:45:24.877827",
  //       "endTime": "2025-04-04T17:45:24.877835",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 5.0,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D062",
  //   "name": "Balaji Saravanan",
  //   "licenseNumber": "TN-74-894860",
  //   "phone": "+91-987651062",
  //   "assignedTruckId": null,
  //   "status": "on-duty",
  //   "experienceYears": 3,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-05-29T17:45:24.877856",
  //       "score": 98,
  //       "instructor": {
  //         "name": "Mr. Suresh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP620",
  //       "from": "Nagercoil",
  //       "to": "Coimbatore",
  //       "cargo": "Fruits",
  //       "loadWeight": 8.95,
  //       "startTime": "2025-04-03T17:45:24.878020",
  //       "endTime": "2025-04-07T17:45:24.878027",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.1,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP621",
  //       "from": "Erode",
  //       "to": "Coimbatore",
  //       "cargo": "Electronics",
  //       "loadWeight": 8.72,
  //       "startTime": "2025-03-17T17:45:24.878036",
  //       "endTime": "2025-03-15T17:45:24.878042",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D063",
  //   "name": "Saravanan Dinesh",
  //   "licenseNumber": "TN-34-470400",
  //   "phone": "+91-987651063",
  //   "assignedTruckId": null,
  //   "status": "on-duty",
  //   "experienceYears": 21,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-03-15T17:45:24.878055",
  //       "score": 98,
  //       "instructor": {
  //         "name": "Mr. Elango",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP630",
  //       "from": "Tirunelveli",
  //       "to": "Erode",
  //       "cargo": "Electronics",
  //       "loadWeight": 3.07,
  //       "startTime": "2025-03-30T17:45:24.878066",
  //       "endTime": "2025-03-30T17:45:24.878070",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D064",
  //   "name": "Naveen Naveen",
  //   "licenseNumber": "TN-87-130121",
  //   "phone": "+91-987651064",
  //   "assignedTruckId": null,
  //   "status": "inactive",
  //   "experienceYears": 9,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-01-22T17:45:24.878082",
  //       "score": 100,
  //       "instructor": {
  //         "name": "Mr. Elango",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP640",
  //       "from": "Madurai",
  //       "to": "Erode",
  //       "cargo": "Fruits",
  //       "loadWeight": 5.89,
  //       "startTime": "2025-02-13T17:45:24.878091",
  //       "endTime": "2025-03-20T17:45:24.878096",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D065",
  //   "name": "Murugan Karthik",
  //   "licenseNumber": "TN-81-248548",
  //   "phone": "+91-987651065",
  //   "assignedTruckId": null,
  //   "status": "inactive",
  //   "experienceYears": 16,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-04-11T17:45:24.878115",
  //       "score": 81,
  //       "instructor": {
  //         "name": "Mr. Arun",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP650",
  //       "from": "Trichy",
  //       "to": "Nagercoil",
  //       "cargo": "Fruits",
  //       "loadWeight": 8.26,
  //       "startTime": "2025-03-27T17:45:24.878132",
  //       "endTime": "2025-04-01T17:45:24.878140",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.0,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP651",
  //       "from": "Tirunelveli",
  //       "to": "Nagercoil",
  //       "cargo": "Fruits",
  //       "loadWeight": 6.95,
  //       "startTime": "2025-01-13T17:45:24.878150",
  //       "endTime": "2025-03-13T17:45:24.878154",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.8,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP652",
  //       "from": "Trichy",
  //       "to": "Nagercoil",
  //       "cargo": "Electronics",
  //       "loadWeight": 6.54,
  //       "startTime": "2025-03-03T17:45:24.878163",
  //       "endTime": "2025-03-20T17:45:24.878167",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.9,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D066",
  //   "name": "Vasanth Karthik",
  //   "licenseNumber": "TN-98-665969",
  //   "phone": "+91-987651066",
  //   "assignedTruckId": null,
  //   "status": "inactive",
  //   "experienceYears": 18,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-12-28T17:45:24.878180",
  //       "score": 90,
  //       "instructor": {
  //         "name": "Mr. Prakash",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP660",
  //       "from": "Salem",
  //       "to": "Vellore",
  //       "cargo": "Textiles",
  //       "loadWeight": 7.19,
  //       "startTime": "2025-04-01T17:45:24.878190",
  //       "endTime": "2025-04-08T17:45:24.878195",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.3,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP661",
  //       "from": "Salem",
  //       "to": "Madurai",
  //       "cargo": "Textiles",
  //       "loadWeight": 9.49,
  //       "startTime": "2025-03-26T17:45:24.878203",
  //       "endTime": "2025-04-03T17:45:24.878207",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 5.0,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D067",
  //   "name": "Kumar Kumar",
  //   "licenseNumber": "TN-12-955897",
  //   "phone": "+91-987651067",
  //   "assignedTruckId": null,
  //   "status": "on-break",
  //   "experienceYears": 4,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-08-10T17:45:24.878219",
  //       "score": 89,
  //       "instructor": {
  //         "name": "Mr. Mohan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP670",
  //       "from": "Vellore",
  //       "to": "Salem",
  //       "cargo": "Fruits",
  //       "loadWeight": 9.86,
  //       "startTime": "2025-01-20T17:45:24.878229",
  //       "endTime": "2025-03-27T17:45:24.878233",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.2,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP671",
  //       "from": "Erode",
  //       "to": "Trichy",
  //       "cargo": "Cement",
  //       "loadWeight": 4.74,
  //       "startTime": "2025-02-21T17:45:24.878259",
  //       "endTime": "2025-04-09T17:45:24.878267",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP672",
  //       "from": "Trichy",
  //       "to": "Madurai",
  //       "cargo": "Electronics",
  //       "loadWeight": 4.83,
  //       "startTime": "2025-03-04T17:45:24.878280",
  //       "endTime": "2025-04-06T17:45:24.878287",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.7,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D068",
  //   "name": "Vasanth Karthik",
  //   "licenseNumber": "TN-15-244020",
  //   "phone": "+91-987651068",
  //   "assignedTruckId": null,
  //   "status": "on-duty",
  //   "experienceYears": 8,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-09-26T17:45:24.878304",
  //       "score": 93,
  //       "instructor": {
  //         "name": "Mr. Murugan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP680",
  //       "from": "Trichy",
  //       "to": "Vellore",
  //       "cargo": "Electronics",
  //       "loadWeight": 4.77,
  //       "startTime": "2025-02-07T17:45:24.878320",
  //       "endTime": "2025-03-28T17:45:24.878328",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP681",
  //       "from": "Vellore",
  //       "to": "Madurai",
  //       "cargo": "Textiles",
  //       "loadWeight": 7.47,
  //       "startTime": "2025-01-19T17:45:24.878342",
  //       "endTime": "2025-04-06T17:45:24.878358",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP682",
  //       "from": "Chennai",
  //       "to": "Madurai",
  //       "cargo": "Cement",
  //       "loadWeight": 3.16,
  //       "startTime": "2025-04-05T17:45:24.878367",
  //       "endTime": "2025-03-18T17:45:24.878371",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D069",
  //   "name": "Balaji Suresh",
  //   "licenseNumber": "TN-84-344643",
  //   "phone": "+91-987651069",
  //   "assignedTruckId": null,
  //   "status": "on-duty",
  //   "experienceYears": 17,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-12-02T17:45:24.878383",
  //       "score": 93,
  //       "instructor": {
  //         "name": "Mr. Saravanan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP690",
  //       "from": "Nagercoil",
  //       "to": "Nagercoil",
  //       "cargo": "Cement",
  //       "loadWeight": 3.42,
  //       "startTime": "2025-02-24T17:45:24.878393",
  //       "endTime": "2025-03-16T17:45:24.878398",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.2,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP691",
  //       "from": "Madurai",
  //       "to": "Madurai",
  //       "cargo": "Cement",
  //       "loadWeight": 5.37,
  //       "startTime": "2025-03-21T17:45:24.878408",
  //       "endTime": "2025-03-20T17:45:24.878415",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.3,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP692",
  //       "from": "Tirunelveli",
  //       "to": "Erode",
  //       "cargo": "Fruits",
  //       "loadWeight": 5.11,
  //       "startTime": "2025-03-26T17:45:24.878433",
  //       "endTime": "2025-03-27T17:45:24.878440",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D070",
  //   "name": "Kumar Vasanth",
  //   "licenseNumber": "TN-92-357910",
  //   "phone": "+91-987651070",
  //   "assignedTruckId": null,
  //   "status": "on-trip",
  //   "experienceYears": 3,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-08-18T17:45:24.878458",
  //       "score": 91,
  //       "instructor": {
  //         "name": "Mr. Dinesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP700",
  //       "from": "Coimbatore",
  //       "to": "Madurai",
  //       "cargo": "Cement",
  //       "loadWeight": 6.44,
  //       "startTime": "2025-03-17T17:45:24.878475",
  //       "endTime": "2025-03-10T17:45:24.878481",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.2,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP701",
  //       "from": "Coimbatore",
  //       "to": "Madurai",
  //       "cargo": "Cement",
  //       "loadWeight": 9.64,
  //       "startTime": "2025-04-05T17:45:24.878499",
  //       "endTime": "2025-04-04T17:45:24.878505",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP702",
  //       "from": "Nagercoil",
  //       "to": "Madurai",
  //       "cargo": "Textiles",
  //       "loadWeight": 4.85,
  //       "startTime": "2025-01-26T17:45:24.878513",
  //       "endTime": "2025-03-18T17:45:24.878518",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.8,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D071",
  //   "name": "Sanjay Sathish",
  //   "licenseNumber": "TN-19-100800",
  //   "phone": "+91-987651071",
  //   "assignedTruckId": null,
  //   "status": "inactive",
  //   "experienceYears": 8,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-03-04T17:45:24.878529",
  //       "score": 88,
  //       "instructor": {
  //         "name": "Mr. Rajesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP710",
  //       "from": "Chennai",
  //       "to": "Trichy",
  //       "cargo": "Cement",
  //       "loadWeight": 8.91,
  //       "startTime": "2025-02-22T17:45:24.878540",
  //       "endTime": "2025-04-07T17:45:24.878545",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP711",
  //       "from": "Madurai",
  //       "to": "Tirunelveli",
  //       "cargo": "Cement",
  //       "loadWeight": 9.83,
  //       "startTime": "2025-03-07T17:45:24.878553",
  //       "endTime": "2025-03-26T17:45:24.878558",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.2,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP712",
  //       "from": "Nagercoil",
  //       "to": "Madurai",
  //       "cargo": "Electronics",
  //       "loadWeight": 4.88,
  //       "startTime": "2025-01-10T17:45:24.878566",
  //       "endTime": "2025-03-17T17:45:24.878571",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.5,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D072",
  //   "name": "Bharath Naveen",
  //   "licenseNumber": "TN-32-370304",
  //   "phone": "+91-987651072",
  //   "assignedTruckId": null,
  //   "status": "on-trip",
  //   "experienceYears": 13,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-04-03T17:45:24.878582",
  //       "score": 82,
  //       "instructor": {
  //         "name": "Mr. Naveen",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP720",
  //       "from": "Nagercoil",
  //       "to": "Chennai",
  //       "cargo": "Textiles",
  //       "loadWeight": 4.41,
  //       "startTime": "2025-03-28T17:45:24.878591",
  //       "endTime": "2025-03-21T17:45:24.878595",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.8,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D073",
  //   "name": "Ramesh Sathish",
  //   "licenseNumber": "TN-74-550891",
  //   "phone": "+91-987651073",
  //   "assignedTruckId": null,
  //   "status": "on-break",
  //   "experienceYears": 5,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-06-20T17:45:24.878607",
  //       "score": 96,
  //       "instructor": {
  //         "name": "Mr. Sanjay",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP730",
  //       "from": "Madurai",
  //       "to": "Nagercoil",
  //       "cargo": "Electronics",
  //       "loadWeight": 9.42,
  //       "startTime": "2025-03-23T17:45:24.878617",
  //       "endTime": "2025-03-22T17:45:24.878621",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.9,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D074",
  //   "name": "Suresh Harish",
  //   "licenseNumber": "TN-23-776630",
  //   "phone": "+91-987651074",
  //   "assignedTruckId": null,
  //   "status": "on-trip",
  //   "experienceYears": 21,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-06-16T17:45:24.878632",
  //       "score": 95,
  //       "instructor": {
  //         "name": "Mr. Kumar",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP740",
  //       "from": "Coimbatore",
  //       "to": "Vellore",
  //       "cargo": "Cement",
  //       "loadWeight": 6.55,
  //       "startTime": "2025-02-08T17:45:24.878642",
  //       "endTime": "2025-03-30T17:45:24.878646",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.2,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP741",
  //       "from": "Nagercoil",
  //       "to": "Coimbatore",
  //       "cargo": "Textiles",
  //       "loadWeight": 4.2,
  //       "startTime": "2025-03-05T17:45:24.878655",
  //       "endTime": "2025-04-01T17:45:24.878661",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP742",
  //       "from": "Chennai",
  //       "to": "Vellore",
  //       "cargo": "Cement",
  //       "loadWeight": 5.83,
  //       "startTime": "2025-01-19T17:45:24.878675",
  //       "endTime": "2025-03-17T17:45:24.878682",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.0,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D075",
  //   "name": "Harish Bharath",
  //   "licenseNumber": "TN-84-311653",
  //   "phone": "+91-987651075",
  //   "assignedTruckId": null,
  //   "status": "on-trip",
  //   "experienceYears": 10,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-05-10T17:45:24.878702",
  //       "score": 84,
  //       "instructor": {
  //         "name": "Mr. Harish",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP750",
  //       "from": "Nagercoil",
  //       "to": "Trichy",
  //       "cargo": "Fruits",
  //       "loadWeight": 6.25,
  //       "startTime": "2025-03-26T17:45:24.878711",
  //       "endTime": "2025-03-17T17:45:24.878716",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D076",
  //   "name": "Harish Sathish",
  //   "licenseNumber": "TN-97-303911",
  //   "phone": "+91-987651076",
  //   "assignedTruckId": null,
  //   "status": "on-duty",
  //   "experienceYears": 25,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-01-30T17:45:24.878728",
  //       "score": 82,
  //       "instructor": {
  //         "name": "Mr. Mohan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP760",
  //       "from": "Salem",
  //       "to": "Chennai",
  //       "cargo": "Electronics",
  //       "loadWeight": 5.35,
  //       "startTime": "2025-02-11T17:45:24.878738",
  //       "endTime": "2025-03-10T17:45:24.878742",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.9,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP761",
  //       "from": "Madurai",
  //       "to": "Chennai",
  //       "cargo": "Fruits",
  //       "loadWeight": 3.19,
  //       "startTime": "2025-02-13T17:45:24.878750",
  //       "endTime": "2025-03-10T17:45:24.878754",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.9,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP762",
  //       "from": "Nagercoil",
  //       "to": "Salem",
  //       "cargo": "Electronics",
  //       "loadWeight": 5.5,
  //       "startTime": "2025-03-31T17:45:24.878763",
  //       "endTime": "2025-03-21T17:45:24.878767",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D077",
  //   "name": "Kumar Prakash",
  //   "licenseNumber": "TN-33-837750",
  //   "phone": "+91-987651077",
  //   "assignedTruckId": null,
  //   "status": "on-duty",
  //   "experienceYears": 18,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-11-03T17:45:24.878778",
  //       "score": 100,
  //       "instructor": {
  //         "name": "Mr. Sanjay",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP770",
  //       "from": "Chennai",
  //       "to": "Chennai",
  //       "cargo": "Fruits",
  //       "loadWeight": 5.01,
  //       "startTime": "2025-01-27T17:45:24.878795",
  //       "endTime": "2025-03-19T17:45:24.878799",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.9,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D078",
  //   "name": "Sanjay Vasanth",
  //   "licenseNumber": "TN-87-707772",
  //   "phone": "+91-987651078",
  //   "assignedTruckId": null,
  //   "status": "on-trip",
  //   "experienceYears": 24,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-01-08T17:45:24.878811",
  //       "score": 91,
  //       "instructor": {
  //         "name": "Mr. Arun",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP780",
  //       "from": "Salem",
  //       "to": "Chennai",
  //       "cargo": "Electronics",
  //       "loadWeight": 6.07,
  //       "startTime": "2025-02-07T17:45:24.878822",
  //       "endTime": "2025-04-05T17:45:24.878827",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP781",
  //       "from": "Tirunelveli",
  //       "to": "Vellore",
  //       "cargo": "Electronics",
  //       "loadWeight": 4.74,
  //       "startTime": "2025-04-06T17:45:24.878835",
  //       "endTime": "2025-03-10T17:45:24.878839",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.1,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP782",
  //       "from": "Tirunelveli",
  //       "to": "Madurai",
  //       "cargo": "Fruits",
  //       "loadWeight": 6.09,
  //       "startTime": "2025-03-22T17:45:24.878847",
  //       "endTime": "2025-04-01T17:45:24.878852",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D079",
  //   "name": "Murugan Balaji",
  //   "licenseNumber": "TN-31-912975",
  //   "phone": "+91-987651079",
  //   "assignedTruckId": null,
  //   "status": "on-duty",
  //   "experienceYears": 23,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-06-29T17:45:24.878864",
  //       "score": 82,
  //       "instructor": {
  //         "name": "Mr. Naveen",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP790",
  //       "from": "Coimbatore",
  //       "to": "Coimbatore",
  //       "cargo": "Textiles",
  //       "loadWeight": 4.4,
  //       "startTime": "2025-01-09T17:45:24.878874",
  //       "endTime": "2025-03-14T17:45:24.878878",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.9,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D080",
  //   "name": "Elango Dinesh",
  //   "licenseNumber": "TN-62-682734",
  //   "phone": "+91-987651080",
  //   "assignedTruckId": null,
  //   "status": "inactive",
  //   "experienceYears": 11,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-10-15T17:45:24.878890",
  //       "score": 86,
  //       "instructor": {
  //         "name": "Mr. Dinesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP800",
  //       "from": "Salem",
  //       "to": "Madurai",
  //       "cargo": "Fruits",
  //       "loadWeight": 6.22,
  //       "startTime": "2025-03-11T17:45:24.878900",
  //       "endTime": "2025-03-24T17:45:24.878906",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP801",
  //       "from": "Tirunelveli",
  //       "to": "Tirunelveli",
  //       "cargo": "Electronics",
  //       "loadWeight": 6.76,
  //       "startTime": "2025-01-14T17:45:24.878919",
  //       "endTime": "2025-03-16T17:45:24.878926",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.8,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP802",
  //       "from": "Coimbatore",
  //       "to": "Salem",
  //       "cargo": "Fruits",
  //       "loadWeight": 4.88,
  //       "startTime": "2025-01-28T17:45:24.878939",
  //       "endTime": "2025-04-05T17:45:24.878946",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D081",
  //   "name": "Vignesh Dinesh",
  //   "licenseNumber": "TN-16-790437",
  //   "phone": "+91-987651081",
  //   "assignedTruckId": null,
  //   "status": "on-trip",
  //   "experienceYears": 20,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-07-20T17:45:24.878965",
  //       "score": 93,
  //       "instructor": {
  //         "name": "Mr. Ramesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP810",
  //       "from": "Coimbatore",
  //       "to": "Nagercoil",
  //       "cargo": "Electronics",
  //       "loadWeight": 5.56,
  //       "startTime": "2025-01-22T17:45:24.878979",
  //       "endTime": "2025-04-06T17:45:24.878983",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D082",
  //   "name": "Vasanth Vasanth",
  //   "licenseNumber": "TN-71-264075",
  //   "phone": "+91-987651082",
  //   "assignedTruckId": null,
  //   "status": "on-break",
  //   "experienceYears": 2,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-10-13T17:45:24.879009",
  //       "score": 81,
  //       "instructor": {
  //         "name": "Mr. Murugan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP820",
  //       "from": "Coimbatore",
  //       "to": "Vellore",
  //       "cargo": "Electronics",
  //       "loadWeight": 6.68,
  //       "startTime": "2025-02-11T17:45:24.879022",
  //       "endTime": "2025-04-02T17:45:24.879026",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP821",
  //       "from": "Salem",
  //       "to": "Chennai",
  //       "cargo": "Textiles",
  //       "loadWeight": 7.25,
  //       "startTime": "2025-02-10T17:45:24.879035",
  //       "endTime": "2025-03-11T17:45:24.879042",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.3,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP822",
  //       "from": "Coimbatore",
  //       "to": "Erode",
  //       "cargo": "Cement",
  //       "loadWeight": 8.53,
  //       "startTime": "2025-03-22T17:45:24.879056",
  //       "endTime": "2025-04-05T17:45:24.879062",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D083",
  //   "name": "Naveen Sathish",
  //   "licenseNumber": "TN-42-366371",
  //   "phone": "+91-987651083",
  //   "assignedTruckId": null,
  //   "status": "inactive",
  //   "experienceYears": 20,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-04-02T17:45:24.879083",
  //       "score": 93,
  //       "instructor": {
  //         "name": "Mr. Dinesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP830",
  //       "from": "Coimbatore",
  //       "to": "Erode",
  //       "cargo": "Fruits",
  //       "loadWeight": 5.94,
  //       "startTime": "2025-01-14T17:45:24.879096",
  //       "endTime": "2025-03-17T17:45:24.879100",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.1,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP831",
  //       "from": "Tirunelveli",
  //       "to": "Tirunelveli",
  //       "cargo": "Cement",
  //       "loadWeight": 9.8,
  //       "startTime": "2025-02-04T17:45:24.879109",
  //       "endTime": "2025-03-20T17:45:24.879114",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP832",
  //       "from": "Nagercoil",
  //       "to": "Erode",
  //       "cargo": "Electronics",
  //       "loadWeight": 6.65,
  //       "startTime": "2025-03-03T17:45:24.879122",
  //       "endTime": "2025-03-20T17:45:24.879126",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D084",
  //   "name": "Mohan Ramesh",
  //   "licenseNumber": "TN-62-449839",
  //   "phone": "+91-987651084",
  //   "assignedTruckId": null,
  //   "status": "on-duty",
  //   "experienceYears": 5,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-03-09T17:45:24.879151",
  //       "score": 81,
  //       "instructor": {
  //         "name": "Mr. Harish",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP840",
  //       "from": "Chennai",
  //       "to": "Trichy",
  //       "cargo": "Fruits",
  //       "loadWeight": 9.33,
  //       "startTime": "2025-02-28T17:45:24.879161",
  //       "endTime": "2025-04-06T17:45:24.879165",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 5.0,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP841",
  //       "from": "Nagercoil",
  //       "to": "Tirunelveli",
  //       "cargo": "Cement",
  //       "loadWeight": 4.44,
  //       "startTime": "2025-02-05T17:45:24.879174",
  //       "endTime": "2025-03-20T17:45:24.879179",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D085",
  //   "name": "Sathish Naveen",
  //   "licenseNumber": "TN-46-621255",
  //   "phone": "+91-987651085",
  //   "assignedTruckId": null,
  //   "status": "on-break",
  //   "experienceYears": 12,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-12-13T17:45:24.879196",
  //       "score": 90,
  //       "instructor": {
  //         "name": "Mr. Karthik",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP850",
  //       "from": "Madurai",
  //       "to": "Madurai",
  //       "cargo": "Fruits",
  //       "loadWeight": 9.5,
  //       "startTime": "2025-01-25T17:45:24.879213",
  //       "endTime": "2025-03-23T17:45:24.879220",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D086",
  //   "name": "Balaji Balaji",
  //   "licenseNumber": "TN-53-396642",
  //   "phone": "+91-987651086",
  //   "assignedTruckId": null,
  //   "status": "on-duty",
  //   "experienceYears": 20,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-07-22T17:45:24.879234",
  //       "score": 88,
  //       "instructor": {
  //         "name": "Mr. Karthik",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP860",
  //       "from": "Vellore",
  //       "to": "Chennai",
  //       "cargo": "Fruits",
  //       "loadWeight": 4.46,
  //       "startTime": "2025-02-13T17:45:24.879244",
  //       "endTime": "2025-03-22T17:45:24.879250",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP861",
  //       "from": "Nagercoil",
  //       "to": "Coimbatore",
  //       "cargo": "Textiles",
  //       "loadWeight": 3.95,
  //       "startTime": "2025-04-06T17:45:24.879258",
  //       "endTime": "2025-03-11T17:45:24.879263",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D087",
  //   "name": "Kumar Murugan",
  //   "licenseNumber": "TN-33-478816",
  //   "phone": "+91-987651087",
  //   "assignedTruckId": null,
  //   "status": "on-break",
  //   "experienceYears": 12,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-01-17T17:45:24.879274",
  //       "score": 94,
  //       "instructor": {
  //         "name": "Mr. Vignesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP870",
  //       "from": "Nagercoil",
  //       "to": "Erode",
  //       "cargo": "Cement",
  //       "loadWeight": 9.72,
  //       "startTime": "2025-03-24T17:45:24.879285",
  //       "endTime": "2025-04-03T17:45:24.879289",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP871",
  //       "from": "Madurai",
  //       "to": "Coimbatore",
  //       "cargo": "Electronics",
  //       "loadWeight": 9.08,
  //       "startTime": "2025-01-28T17:45:24.879297",
  //       "endTime": "2025-04-06T17:45:24.879302",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.9,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D088",
  //   "name": "Murugan Suresh",
  //   "licenseNumber": "TN-67-471758",
  //   "phone": "+91-987651088",
  //   "assignedTruckId": null,
  //   "status": "on-trip",
  //   "experienceYears": 7,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-12-11T17:45:24.879313",
  //       "score": 98,
  //       "instructor": {
  //         "name": "Mr. Suresh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP880",
  //       "from": "Madurai",
  //       "to": "Erode",
  //       "cargo": "Electronics",
  //       "loadWeight": 7.7,
  //       "startTime": "2025-03-31T17:45:24.879323",
  //       "endTime": "2025-03-21T17:45:24.879327",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.2,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP881",
  //       "from": "Coimbatore",
  //       "to": "Coimbatore",
  //       "cargo": "Electronics",
  //       "loadWeight": 7.24,
  //       "startTime": "2025-04-08T17:45:24.879336",
  //       "endTime": "2025-04-06T17:45:24.879340",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.9,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D089",
  //   "name": "Vignesh Balaji",
  //   "licenseNumber": "TN-20-871371",
  //   "phone": "+91-987651089",
  //   "assignedTruckId": null,
  //   "status": "on-break",
  //   "experienceYears": 12,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-04-22T17:45:24.879357",
  //       "score": 91,
  //       "instructor": {
  //         "name": "Mr. Dinesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP890",
  //       "from": "Salem",
  //       "to": "Vellore",
  //       "cargo": "Fruits",
  //       "loadWeight": 3.36,
  //       "startTime": "2025-03-20T17:45:24.879367",
  //       "endTime": "2025-03-23T17:45:24.879371",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D090",
  //   "name": "Ramesh Dinesh",
  //   "licenseNumber": "TN-23-995123",
  //   "phone": "+91-987651090",
  //   "assignedTruckId": null,
  //   "status": "on-break",
  //   "experienceYears": 11,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-09-25T17:45:24.879383",
  //       "score": 100,
  //       "instructor": {
  //         "name": "Mr. Mohan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP900",
  //       "from": "Salem",
  //       "to": "Chennai",
  //       "cargo": "Cement",
  //       "loadWeight": 3.75,
  //       "startTime": "2025-03-12T17:45:24.879394",
  //       "endTime": "2025-03-27T17:45:24.879398",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP901",
  //       "from": "Vellore",
  //       "to": "Trichy",
  //       "cargo": "Electronics",
  //       "loadWeight": 9.3,
  //       "startTime": "2025-04-01T17:45:24.879407",
  //       "endTime": "2025-03-30T17:45:24.879412",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP902",
  //       "from": "Madurai",
  //       "to": "Trichy",
  //       "cargo": "Textiles",
  //       "loadWeight": 6.98,
  //       "startTime": "2025-03-27T17:45:24.879421",
  //       "endTime": "2025-04-06T17:45:24.879428",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D091",
  //   "name": "Karthik Naveen",
  //   "licenseNumber": "TN-13-486134",
  //   "phone": "+91-987651091",
  //   "assignedTruckId": null,
  //   "status": "on-trip",
  //   "experienceYears": 4,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-08-02T17:45:24.879451",
  //       "score": 96,
  //       "instructor": {
  //         "name": "Mr. Vignesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP910",
  //       "from": "Erode",
  //       "to": "Erode",
  //       "cargo": "Fruits",
  //       "loadWeight": 3.77,
  //       "startTime": "2025-01-22T17:45:24.879462",
  //       "endTime": "2025-03-31T17:45:24.879466",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP911",
  //       "from": "Trichy",
  //       "to": "Tirunelveli",
  //       "cargo": "Cement",
  //       "loadWeight": 9.09,
  //       "startTime": "2025-04-08T17:45:24.879474",
  //       "endTime": "2025-03-19T17:45:24.879479",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.7,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D092",
  //   "name": "Kumar Bharath",
  //   "licenseNumber": "TN-92-492201",
  //   "phone": "+91-987651092",
  //   "assignedTruckId": null,
  //   "status": "inactive",
  //   "experienceYears": 12,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-08-13T17:45:24.879490",
  //       "score": 84,
  //       "instructor": {
  //         "name": "Mr. Balaji",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP920",
  //       "from": "Chennai",
  //       "to": "Vellore",
  //       "cargo": "Cement",
  //       "loadWeight": 8.21,
  //       "startTime": "2025-02-01T17:45:24.879530",
  //       "endTime": "2025-04-09T17:45:24.879538",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "On-time delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP921",
  //       "from": "Chennai",
  //       "to": "Tirunelveli",
  //       "cargo": "Electronics",
  //       "loadWeight": 5.35,
  //       "startTime": "2025-02-10T17:45:24.879551",
  //       "endTime": "2025-04-07T17:45:24.879558",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.9,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP922",
  //       "from": "Salem",
  //       "to": "Nagercoil",
  //       "cargo": "Cement",
  //       "loadWeight": 8.1,
  //       "startTime": "2025-01-17T17:45:24.879572",
  //       "endTime": "2025-04-09T17:45:24.879579",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D093",
  //   "name": "Dinesh Vignesh",
  //   "licenseNumber": "TN-48-100701",
  //   "phone": "+91-987651093",
  //   "assignedTruckId": null,
  //   "status": "inactive",
  //   "experienceYears": 13,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-04-06T17:45:24.879598",
  //       "score": 86,
  //       "instructor": {
  //         "name": "Mr. Naveen",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP930",
  //       "from": "Coimbatore",
  //       "to": "Salem",
  //       "cargo": "Cement",
  //       "loadWeight": 9.19,
  //       "startTime": "2025-03-02T17:45:24.879616",
  //       "endTime": "2025-03-22T17:45:24.879620",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.5,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D094",
  //   "name": "Naveen Arun",
  //   "licenseNumber": "TN-53-787119",
  //   "phone": "+91-987651094",
  //   "assignedTruckId": null,
  //   "status": "on-duty",
  //   "experienceYears": 1,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-03-28T17:45:24.879635",
  //       "score": 85,
  //       "instructor": {
  //         "name": "Mr. Mohan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP940",
  //       "from": "Vellore",
  //       "to": "Coimbatore",
  //       "cargo": "Textiles",
  //       "loadWeight": 5.55,
  //       "startTime": "2025-02-14T17:45:24.879650",
  //       "endTime": "2025-03-24T17:45:24.879660",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP941",
  //       "from": "Salem",
  //       "to": "Vellore",
  //       "cargo": "Electronics",
  //       "loadWeight": 7.65,
  //       "startTime": "2025-02-28T17:45:24.879669",
  //       "endTime": "2025-03-28T17:45:24.879673",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.2,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP942",
  //       "from": "Tirunelveli",
  //       "to": "Nagercoil",
  //       "cargo": "Cement",
  //       "loadWeight": 5.0,
  //       "startTime": "2025-03-22T17:45:24.879681",
  //       "endTime": "2025-03-10T17:45:24.879687",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.5,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D095",
  //   "name": "Saravanan Karthik",
  //   "licenseNumber": "TN-89-553879",
  //   "phone": "+91-987651095",
  //   "assignedTruckId": null,
  //   "status": "on-trip",
  //   "experienceYears": 5,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-01-19T17:45:24.879699",
  //       "score": 87,
  //       "instructor": {
  //         "name": "Mr. Prakash",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP950",
  //       "from": "Vellore",
  //       "to": "Erode",
  //       "cargo": "Fruits",
  //       "loadWeight": 7.87,
  //       "startTime": "2025-04-06T17:45:24.879710",
  //       "endTime": "2025-03-13T17:45:24.879714",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.0,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP951",
  //       "from": "Trichy",
  //       "to": "Vellore",
  //       "cargo": "Textiles",
  //       "loadWeight": 5.55,
  //       "startTime": "2025-01-20T17:45:24.879722",
  //       "endTime": "2025-04-05T17:45:24.879726",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.6,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP952",
  //       "from": "Salem",
  //       "to": "Coimbatore",
  //       "cargo": "Textiles",
  //       "loadWeight": 6.02,
  //       "startTime": "2025-01-27T17:45:24.879734",
  //       "endTime": "2025-03-14T17:45:24.879739",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "On-time delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D096",
  //   "name": "Ramesh Saravanan",
  //   "licenseNumber": "TN-11-153750",
  //   "phone": "+91-987651096",
  //   "assignedTruckId": null,
  //   "status": "on-break",
  //   "experienceYears": 14,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-09-28T17:45:24.879752",
  //       "score": 81,
  //       "instructor": {
  //         "name": "Mr. Dinesh",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP960",
  //       "from": "Coimbatore",
  //       "to": "Vellore",
  //       "cargo": "Fruits",
  //       "loadWeight": 8.07,
  //       "startTime": "2025-02-01T17:45:24.879768",
  //       "endTime": "2025-04-09T17:45:24.879775",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D097",
  //   "name": "Saravanan Murugan",
  //   "licenseNumber": "TN-48-551401",
  //   "phone": "+91-987651097",
  //   "assignedTruckId": null,
  //   "status": "on-duty",
  //   "experienceYears": 15,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-09-28T17:45:24.879795",
  //       "score": 82,
  //       "instructor": {
  //         "name": "Mr. Prakash",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP970",
  //       "from": "Coimbatore",
  //       "to": "Nagercoil",
  //       "cargo": "Textiles",
  //       "loadWeight": 7.13,
  //       "startTime": "2025-01-30T17:45:24.879812",
  //       "endTime": "2025-04-07T17:45:24.879817",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.8,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D098",
  //   "name": "Saravanan Sathish",
  //   "licenseNumber": "TN-70-356026",
  //   "phone": "+91-987651098",
  //   "assignedTruckId": null,
  //   "status": "on-break",
  //   "experienceYears": 1,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-08-09T17:45:24.879829",
  //       "score": 90,
  //       "instructor": {
  //         "name": "Mr. Saravanan",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP980",
  //       "from": "Trichy",
  //       "to": "Salem",
  //       "cargo": "Cement",
  //       "loadWeight": 8.19,
  //       "startTime": "2025-02-13T17:45:24.879838",
  //       "endTime": "2025-04-09T17:45:24.879842",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.7,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP981",
  //       "from": "Vellore",
  //       "to": "Coimbatore",
  //       "cargo": "Electronics",
  //       "loadWeight": 9.79,
  //       "startTime": "2025-01-18T17:45:24.879851",
  //       "endTime": "2025-03-15T17:45:24.879855",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.0,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP982",
  //       "from": "Trichy",
  //       "to": "Chennai",
  //       "cargo": "Electronics",
  //       "loadWeight": 7.54,
  //       "startTime": "2025-03-04T17:45:24.879865",
  //       "endTime": "2025-03-26T17:45:24.879869",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D099",
  //   "name": "Dinesh Dinesh",
  //   "licenseNumber": "TN-41-516370",
  //   "phone": "+91-987651099",
  //   "assignedTruckId": null,
  //   "status": "on-break",
  //   "experienceYears": 6,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2025-01-29T17:45:24.879881",
  //       "score": 88,
  //       "instructor": {
  //         "name": "Mr. Sanjay",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP990",
  //       "from": "Madurai",
  //       "to": "Erode",
  //       "cargo": "Textiles",
  //       "loadWeight": 3.33,
  //       "startTime": "2025-03-18T17:45:24.879891",
  //       "endTime": "2025-04-08T17:45:24.879895",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.4,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP991",
  //       "from": "Madurai",
  //       "to": "Salem",
  //       "cargo": "Fruits",
  //       "loadWeight": 8.37,
  //       "startTime": "2025-02-23T17:45:24.879903",
  //       "endTime": "2025-04-05T17:45:24.879907",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.8,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // },
  // {
  //   "id": "D100",
  //   "name": "Rajesh Dinesh",
  //   "licenseNumber": "TN-70-241774",
  //   "phone": "+91-987651100",
  //   "assignedTruckId": null,
  //   "status": "on-duty",
  //   "experienceYears": 21,
  //   "training": {
  //     "completed": true,
  //     "lastCourse": {
  //       "name": "Advanced Defensive Driving",
  //       "completedOn": "2024-06-12T17:45:24.879918",
  //       "score": 90,
  //       "instructor": {
  //         "name": "Mr. Balaji",
  //         "certifiedBy": "TNSDC"
  //       }
  //     }
  //   },
  //   "tripHistory": [
  //     {
  //       "tripId": "TRIP1000",
  //       "from": "Erode",
  //       "to": "Erode",
  //       "cargo": "Electronics",
  //       "loadWeight": 7.97,
  //       "startTime": "2025-01-22T17:45:24.879928",
  //       "endTime": "2025-03-13T17:45:24.879932",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.5,
  //         "remarks": "Smooth delivery"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP1001",
  //       "from": "Tirunelveli",
  //       "to": "Erode",
  //       "cargo": "Fruits",
  //       "loadWeight": 6.41,
  //       "startTime": "2025-03-31T17:45:24.879940",
  //       "endTime": "2025-03-18T17:45:24.879945",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 4.6,
  //         "remarks": "Delayed due to traffic"
  //       }
  //     },
  //     {
  //       "tripId": "TRIP1002",
  //       "from": "Madurai",
  //       "to": "Trichy",
  //       "cargo": "Electronics",
  //       "loadWeight": 8.16,
  //       "startTime": "2025-03-04T17:45:24.879953",
  //       "endTime": "2025-03-17T17:45:24.879957",
  //       "status": "completed",
  //       "deliveryFeedback": {
  //         "clientRating": 3.9,
  //         "remarks": "Smooth delivery"
  //       }
  //     }
  //   ]
  // }
];

const trucks = [
  {
    "id": "T001",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-51-6446",
    "capacityTons": 15.42,
    "driverId": "D001",
    "status": "loading",
    "currentLocation": {
      "lat": 13.366612,
      "lng": 78.879649,
      "lastUpdated": "2025-04-08T17:45:24.881203"
    },
    "maintenanceLogs": [
      {
        "date": "2025-03-16T17:45:24.881220",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Trichy Truck Works",
          "address": "Highway Service Lane, Erode",
          "mechanic": {
            "name": "Saravanan",
            "contact": "+91-987651001"
          }
        },
        "partsReplaced": [
          {
            "partName": "AC Unit",
            "vendor": "Bosch Parts",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Madurai",
      "destination": "Chennai",
      "weight": 5.14,
      "expectedArrival": "2025-04-08T17:45:24.881247",
      "status": "in-transit"
    }
  },
  {
    "id": "T002",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-36-2660",
    "capacityTons": 12.26,
    "driverId": "D002",
    "status": "loading",
    "currentLocation": {
      "lat": 13.180413,
      "lng": 78.748501,
      "lastUpdated": "2025-04-08T17:45:24.881275"
    },
    "maintenanceLogs": [
      {
        "date": "2024-11-30T17:45:24.881280",
        "issue": "Brake pad replacement",
        "serviceCenter": {
          "name": "Erode Truck Works",
          "address": "Highway Service Lane, Coimbatore",
          "mechanic": {
            "name": "Prakash",
            "contact": "+91-987651002"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "Castrol India",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Vegetables",
      "loadedAt": "Tirunelveli",
      "destination": "Vellore",
      "weight": 9.95,
      "expectedArrival": "2025-04-08T17:45:24.881294",
      "status": "in-transit"
    }
  },
  {
    "id": "T003",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-12-9929",
    "capacityTons": 18.88,
    "driverId": "D003",
    "status": "idle",
    "currentLocation": {
      "lat": 9.425485,
      "lng": 77.92341,
      "lastUpdated": "2025-04-09T17:45:24.881307"
    },
    "maintenanceLogs": [
      {
        "date": "2024-10-12T17:45:24.881311",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Erode Truck Works",
          "address": "Highway Service Lane, Vellore",
          "mechanic": {
            "name": "Vasanth",
            "contact": "+91-987651003"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "Castrol India",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Madurai",
      "destination": "Madurai",
      "weight": 11.4,
      "expectedArrival": "2025-04-08T17:45:24.881324",
      "status": "in-transit"
    }
  },
  {
    "id": "T004",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-41-8716",
    "capacityTons": 26.07,
    "driverId": "D004",
    "status": "maintenance",
    "currentLocation": {
      "lat": 11.665399,
      "lng": 77.888614,
      "lastUpdated": "2025-04-09T17:45:24.881350"
    },
    "maintenanceLogs": [
      {
        "date": "2025-02-23T17:45:24.881358",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Erode Truck Works",
          "address": "Highway Service Lane, Salem",
          "mechanic": {
            "name": "Kumar",
            "contact": "+91-987651004"
          }
        },
        "partsReplaced": [
          {
            "partName": "Headlight",
            "vendor": "Bosch Parts",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Cement",
      "loadedAt": "Nagercoil",
      "destination": "Salem",
      "weight": 8.21,
      "expectedArrival": "2025-04-09T17:45:24.881380",
      "status": "in-transit"
    }
  },
  {
    "id": "T005",
    "model": "Eicher Pro",
    "licensePlate": "TN-19-4261",
    "capacityTons": 21.44,
    "driverId": "D005",
    "status": "en-route",
    "currentLocation": {
      "lat": 9.900512,
      "lng": 80.437285,
      "lastUpdated": "2025-04-08T17:45:24.881408"
    },
    "maintenanceLogs": [
      {
        "date": "2024-10-29T17:45:24.881413",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Vellore Truck Works",
          "address": "Highway Service Lane, Coimbatore",
          "mechanic": {
            "name": "Murugan",
            "contact": "+91-987651005"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Bosch Parts",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Chennai",
      "destination": "Chennai",
      "weight": 5.13,
      "expectedArrival": "2025-04-08T17:45:24.881426",
      "status": "in-transit"
    }
  },
  {
    "id": "T006",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-21-8930",
    "capacityTons": 22.71,
    "driverId": "D006",
    "status": "idle",
    "currentLocation": {
      "lat": 10.148804,
      "lng": 79.77944,
      "lastUpdated": "2025-04-08T17:45:24.881439"
    },
    "maintenanceLogs": [
      {
        "date": "2025-03-25T17:45:24.881443",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Coimbatore Truck Works",
          "address": "Highway Service Lane, Erode",
          "mechanic": {
            "name": "Murugan",
            "contact": "+91-987651006"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "TVS Auto",
            "warrantyMonths": 12
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Trichy",
      "destination": "Vellore",
      "weight": 11.49,
      "expectedArrival": "2025-04-08T17:45:24.881456",
      "status": "in-transit"
    }
  },
  {
    "id": "T007",
    "model": "Tata Prima",
    "licensePlate": "TN-91-2249",
    "capacityTons": 13.37,
    "driverId": "D007",
    "status": "maintenance",
    "currentLocation": {
      "lat": 8.508185,
      "lng": 79.249904,
      "lastUpdated": "2025-04-08T17:45:24.881469"
    },
    "maintenanceLogs": [
      {
        "date": "2024-12-23T17:45:24.881474",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Tirunelveli Truck Works",
          "address": "Highway Service Lane, Nagercoil",
          "mechanic": {
            "name": "Rajesh",
            "contact": "+91-987651007"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Castrol India",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Salem",
      "destination": "Coimbatore",
      "weight": 6.95,
      "expectedArrival": "2025-04-08T17:45:24.881487",
      "status": "in-transit"
    }
  },
  {
    "id": "T008",
    "model": "Eicher Pro",
    "licensePlate": "TN-29-7881",
    "capacityTons": 21.24,
    "driverId": "D008",
    "status": "loading",
    "currentLocation": {
      "lat": 10.512467,
      "lng": 79.802949,
      "lastUpdated": "2025-04-08T17:45:24.881504"
    },
    "maintenanceLogs": [
      {
        "date": "2025-01-22T17:45:24.881508",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Vellore Truck Works",
          "address": "Highway Service Lane, Madurai",
          "mechanic": {
            "name": "Mohan",
            "contact": "+91-987651008"
          }
        },
        "partsReplaced": [
          {
            "partName": "Headlight",
            "vendor": "Castrol India",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Trichy",
      "destination": "Chennai",
      "weight": 9.97,
      "expectedArrival": "2025-04-08T17:45:24.881521",
      "status": "in-transit"
    }
  },
  {
    "id": "T009",
    "model": "Eicher Pro",
    "licensePlate": "TN-35-7044",
    "capacityTons": 18.03,
    "driverId": "D009",
    "status": "idle",
    "currentLocation": {
      "lat": 13.450441,
      "lng": 79.909455,
      "lastUpdated": "2025-04-08T17:45:24.881533"
    },
    "maintenanceLogs": [
      {
        "date": "2024-11-30T17:45:24.881537",
        "issue": "Brake pad replacement",
        "serviceCenter": {
          "name": "Tirunelveli Truck Works",
          "address": "Highway Service Lane, Nagercoil",
          "mechanic": {
            "name": "Balaji",
            "contact": "+91-987651009"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "TVS Auto",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Vegetables",
      "loadedAt": "Madurai",
      "destination": "Trichy",
      "weight": 6.38,
      "expectedArrival": "2025-04-09T17:45:24.881550",
      "status": "in-transit"
    }
  },
  {
    "id": "T010",
    "model": "Tata Prima",
    "licensePlate": "TN-87-1081",
    "capacityTons": 10.33,
    "driverId": "D010",
    "status": "en-route",
    "currentLocation": {
      "lat": 8.475246,
      "lng": 77.528072,
      "lastUpdated": "2025-04-08T17:45:24.881562"
    },
    "maintenanceLogs": [
      {
        "date": "2024-11-23T17:45:24.881566",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Trichy Truck Works",
          "address": "Highway Service Lane, Tirunelveli",
          "mechanic": {
            "name": "Bharath",
            "contact": "+91-987651010"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "TVS Auto",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Vegetables",
      "loadedAt": "Chennai",
      "destination": "Erode",
      "weight": 7.83,
      "expectedArrival": "2025-04-09T17:45:24.881585",
      "status": "in-transit"
    }
  },
  {
    "id": "T011",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-50-8503",
    "capacityTons": 17.5,
    "driverId": "D011",
    "status": "loading",
    "currentLocation": {
      "lat": 9.774257,
      "lng": 77.383204,
      "lastUpdated": "2025-04-09T17:45:24.881614"
    },
    "maintenanceLogs": [
      {
        "date": "2025-03-15T17:45:24.881619",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Vellore Truck Works",
          "address": "Highway Service Lane, Madurai",
          "mechanic": {
            "name": "Murugan",
            "contact": "+91-987651011"
          }
        },
        "partsReplaced": [
          {
            "partName": "Headlight",
            "vendor": "Castrol India",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Madurai",
      "destination": "Chennai",
      "weight": 11.98,
      "expectedArrival": "2025-04-08T17:45:24.881631",
      "status": "in-transit"
    }
  },
  {
    "id": "T012",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-95-9749",
    "capacityTons": 21.43,
    "driverId": "D012",
    "status": "maintenance",
    "currentLocation": {
      "lat": 13.241207,
      "lng": 78.284724,
      "lastUpdated": "2025-04-08T17:45:24.881643"
    },
    "maintenanceLogs": [
      {
        "date": "2025-02-01T17:45:24.881647",
        "issue": "Brake pad replacement",
        "serviceCenter": {
          "name": "Chennai Truck Works",
          "address": "Highway Service Lane, Madurai",
          "mechanic": {
            "name": "Vasanth",
            "contact": "+91-987651012"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "Castrol India",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Madurai",
      "destination": "Coimbatore",
      "weight": 5.62,
      "expectedArrival": "2025-04-08T17:45:24.881658",
      "status": "in-transit"
    }
  },
  {
    "id": "T013",
    "model": "Eicher Pro",
    "licensePlate": "TN-63-6534",
    "capacityTons": 18.8,
    "driverId": "D013",
    "status": "en-route",
    "currentLocation": {
      "lat": 8.757558,
      "lng": 80.246895,
      "lastUpdated": "2025-04-09T17:45:24.881670"
    },
    "maintenanceLogs": [
      {
        "date": "2024-10-30T17:45:24.881675",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Madurai Truck Works",
          "address": "Highway Service Lane, Erode",
          "mechanic": {
            "name": "Elango",
            "contact": "+91-987651013"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Bosch Parts",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Erode",
      "destination": "Trichy",
      "weight": 4.67,
      "expectedArrival": "2025-04-08T17:45:24.881686",
      "status": "in-transit"
    }
  },
  {
    "id": "T014",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-37-4775",
    "capacityTons": 13.71,
    "driverId": "D014",
    "status": "loading",
    "currentLocation": {
      "lat": 10.796558,
      "lng": 78.045452,
      "lastUpdated": "2025-04-08T17:45:24.881698"
    },
    "maintenanceLogs": [
      {
        "date": "2024-12-10T17:45:24.881703",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Salem Truck Works",
          "address": "Highway Service Lane, Trichy",
          "mechanic": {
            "name": "Suresh",
            "contact": "+91-987651014"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Bosch Parts",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Vegetables",
      "loadedAt": "Vellore",
      "destination": "Madurai",
      "weight": 3.66,
      "expectedArrival": "2025-04-08T17:45:24.881715",
      "status": "in-transit"
    }
  },
  {
    "id": "T015",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-18-2212",
    "capacityTons": 28.45,
    "driverId": "D015",
    "status": "loading",
    "currentLocation": {
      "lat": 9.152493,
      "lng": 80.249415,
      "lastUpdated": "2025-04-09T17:45:24.881727"
    },
    "maintenanceLogs": [
      {
        "date": "2024-11-25T17:45:24.881731",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Salem Truck Works",
          "address": "Highway Service Lane, Tirunelveli",
          "mechanic": {
            "name": "Harish",
            "contact": "+91-987651015"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "Bosch Parts",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Salem",
      "destination": "Chennai",
      "weight": 7.63,
      "expectedArrival": "2025-04-08T17:45:24.881743",
      "status": "in-transit"
    }
  },
  {
    "id": "T016",
    "model": "Eicher Pro",
    "licensePlate": "TN-40-1807",
    "capacityTons": 10.99,
    "driverId": "D016",
    "status": "en-route",
    "currentLocation": {
      "lat": 11.651082,
      "lng": 80.086981,
      "lastUpdated": "2025-04-08T17:45:24.881754"
    },
    "maintenanceLogs": [
      {
        "date": "2025-02-01T17:45:24.881759",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Tirunelveli Truck Works",
          "address": "Highway Service Lane, Erode",
          "mechanic": {
            "name": "Murugan",
            "contact": "+91-987651016"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "TVS Auto",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Vegetables",
      "loadedAt": "Trichy",
      "destination": "Trichy",
      "weight": 11.57,
      "expectedArrival": "2025-04-09T17:45:24.881769",
      "status": "in-transit"
    }
  },
  {
    "id": "T017",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-53-5872",
    "capacityTons": 11.57,
    "driverId": "D017",
    "status": "idle",
    "currentLocation": {
      "lat": 11.857313,
      "lng": 80.416098,
      "lastUpdated": "2025-04-09T17:45:24.881783"
    },
    "maintenanceLogs": [
      {
        "date": "2024-11-05T17:45:24.881791",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Vellore Truck Works",
          "address": "Highway Service Lane, Chennai",
          "mechanic": {
            "name": "Suresh",
            "contact": "+91-987651017"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Castrol India",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Vellore",
      "destination": "Tirunelveli",
      "weight": 11.61,
      "expectedArrival": "2025-04-08T17:45:24.881811",
      "status": "in-transit"
    }
  },
  {
    "id": "T018",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-66-5949",
    "capacityTons": 13.15,
    "driverId": "D018",
    "status": "en-route",
    "currentLocation": {
      "lat": 9.574043,
      "lng": 77.059356,
      "lastUpdated": "2025-04-08T17:45:24.881824"
    },
    "maintenanceLogs": [
      {
        "date": "2025-03-22T17:45:24.881828",
        "issue": "Brake pad replacement",
        "serviceCenter": {
          "name": "Chennai Truck Works",
          "address": "Highway Service Lane, Salem",
          "mechanic": {
            "name": "Suresh",
            "contact": "+91-987651018"
          }
        },
        "partsReplaced": [
          {
            "partName": "AC Unit",
            "vendor": "Castrol India",
            "warrantyMonths": 12
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Vegetables",
      "loadedAt": "Vellore",
      "destination": "Salem",
      "weight": 9.04,
      "expectedArrival": "2025-04-09T17:45:24.881841",
      "status": "in-transit"
    }
  },
  {
    "id": "T019",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-23-4790",
    "capacityTons": 11.77,
    "driverId": "D019",
    "status": "loading",
    "currentLocation": {
      "lat": 10.077053,
      "lng": 77.376988,
      "lastUpdated": "2025-04-08T17:45:24.881852"
    },
    "maintenanceLogs": [
      {
        "date": "2025-01-22T17:45:24.881857",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Vellore Truck Works",
          "address": "Highway Service Lane, Chennai",
          "mechanic": {
            "name": "Harish",
            "contact": "+91-987651019"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Castrol India",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Cement",
      "loadedAt": "Trichy",
      "destination": "Vellore",
      "weight": 9.7,
      "expectedArrival": "2025-04-09T17:45:24.881869",
      "status": "in-transit"
    }
  },
  {
    "id": "T020",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-70-3461",
    "capacityTons": 21.01,
    "driverId": "D020",
    "status": "loading",
    "currentLocation": {
      "lat": 9.142686,
      "lng": 77.84764,
      "lastUpdated": "2025-04-08T17:45:24.881880"
    },
    "maintenanceLogs": [
      {
        "date": "2025-01-11T17:45:24.881884",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Madurai Truck Works",
          "address": "Highway Service Lane, Erode",
          "mechanic": {
            "name": "Elango",
            "contact": "+91-987651020"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Castrol India",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Nagercoil",
      "destination": "Trichy",
      "weight": 10.05,
      "expectedArrival": "2025-04-09T17:45:24.881896",
      "status": "in-transit"
    }
  },
  {
    "id": "T021",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-50-3139",
    "capacityTons": 12.44,
    "driverId": "D021",
    "status": "idle",
    "currentLocation": {
      "lat": 13.278937,
      "lng": 78.101474,
      "lastUpdated": "2025-04-09T17:45:24.881907"
    },
    "maintenanceLogs": [
      {
        "date": "2025-01-10T17:45:24.881912",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Chennai Truck Works",
          "address": "Highway Service Lane, Chennai",
          "mechanic": {
            "name": "Elango",
            "contact": "+91-987651021"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Castrol India",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Cement",
      "loadedAt": "Madurai",
      "destination": "Nagercoil",
      "weight": 8.81,
      "expectedArrival": "2025-04-09T17:45:24.881922",
      "status": "in-transit"
    }
  },
  {
    "id": "T022",
    "model": "Eicher Pro",
    "licensePlate": "TN-78-7430",
    "capacityTons": 17.49,
    "driverId": "D022",
    "status": "maintenance",
    "currentLocation": {
      "lat": 11.197246,
      "lng": 77.912844,
      "lastUpdated": "2025-04-08T17:45:24.881933"
    },
    "maintenanceLogs": [
      {
        "date": "2025-03-23T17:45:24.881938",
        "issue": "Brake pad replacement",
        "serviceCenter": {
          "name": "Tirunelveli Truck Works",
          "address": "Highway Service Lane, Vellore",
          "mechanic": {
            "name": "Vasanth",
            "contact": "+91-987651022"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "Castrol India",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Erode",
      "destination": "Erode",
      "weight": 8.39,
      "expectedArrival": "2025-04-08T17:45:24.881954",
      "status": "in-transit"
    }
  },
  {
    "id": "T023",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-76-5527",
    "capacityTons": 25.45,
    "driverId": "D023",
    "status": "loading",
    "currentLocation": {
      "lat": 12.873943,
      "lng": 76.484733,
      "lastUpdated": "2025-04-08T17:45:24.881972"
    },
    "maintenanceLogs": [
      {
        "date": "2025-03-23T17:45:24.881980",
        "issue": "Brake pad replacement",
        "serviceCenter": {
          "name": "Vellore Truck Works",
          "address": "Highway Service Lane, Coimbatore",
          "mechanic": {
            "name": "Ramesh",
            "contact": "+91-987651023"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Bosch Parts",
            "warrantyMonths": 12
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Chennai",
      "destination": "Tirunelveli",
      "weight": 6.59,
      "expectedArrival": "2025-04-08T17:45:24.881998",
      "status": "in-transit"
    }
  },
  {
    "id": "T024",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-56-9913",
    "capacityTons": 26.97,
    "driverId": "D024",
    "status": "idle",
    "currentLocation": {
      "lat": 8.870411,
      "lng": 80.036734,
      "lastUpdated": "2025-04-09T17:45:24.882017"
    },
    "maintenanceLogs": [
      {
        "date": "2025-02-15T17:45:24.882025",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Trichy Truck Works",
          "address": "Highway Service Lane, Salem",
          "mechanic": {
            "name": "Suresh",
            "contact": "+91-987651024"
          }
        },
        "partsReplaced": [
          {
            "partName": "Headlight",
            "vendor": "TVS Auto",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Trichy",
      "destination": "Salem",
      "weight": 6.19,
      "expectedArrival": "2025-04-09T17:45:24.882043",
      "status": "in-transit"
    }
  },
  {
    "id": "T025",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-18-3229",
    "capacityTons": 25.57,
    "driverId": "D025",
    "status": "idle",
    "currentLocation": {
      "lat": 10.082498,
      "lng": 77.752854,
      "lastUpdated": "2025-04-09T17:45:24.882062"
    },
    "maintenanceLogs": [
      {
        "date": "2025-02-01T17:45:24.882071",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Trichy Truck Works",
          "address": "Highway Service Lane, Tirunelveli",
          "mechanic": {
            "name": "Sanjay",
            "contact": "+91-987651025"
          }
        },
        "partsReplaced": [
          {
            "partName": "AC Unit",
            "vendor": "Bosch Parts",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Vegetables",
      "loadedAt": "Salem",
      "destination": "Vellore",
      "weight": 11.65,
      "expectedArrival": "2025-04-09T17:45:24.882091",
      "status": "in-transit"
    }
  },
  {
    "id": "T026",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-58-5864",
    "capacityTons": 17.9,
    "driverId": "D026",
    "status": "loading",
    "currentLocation": {
      "lat": 12.248721,
      "lng": 76.282551,
      "lastUpdated": "2025-04-09T17:45:24.882112"
    },
    "maintenanceLogs": [
      {
        "date": "2024-11-23T17:45:24.882119",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Madurai Truck Works",
          "address": "Highway Service Lane, Vellore",
          "mechanic": {
            "name": "Ramesh",
            "contact": "+91-987651026"
          }
        },
        "partsReplaced": [
          {
            "partName": "AC Unit",
            "vendor": "Bosch Parts",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Madurai",
      "destination": "Coimbatore",
      "weight": 8.89,
      "expectedArrival": "2025-04-09T17:45:24.882141",
      "status": "in-transit"
    }
  },
  {
    "id": "T027",
    "model": "Eicher Pro",
    "licensePlate": "TN-21-2909",
    "capacityTons": 15.73,
    "driverId": "D027",
    "status": "maintenance",
    "currentLocation": {
      "lat": 11.208695,
      "lng": 78.523517,
      "lastUpdated": "2025-04-08T17:45:24.882162"
    },
    "maintenanceLogs": [
      {
        "date": "2025-02-23T17:45:24.882169",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Tirunelveli Truck Works",
          "address": "Highway Service Lane, Trichy",
          "mechanic": {
            "name": "Karthik",
            "contact": "+91-987651027"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Bosch Parts",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Erode",
      "destination": "Tirunelveli",
      "weight": 10.5,
      "expectedArrival": "2025-04-08T17:45:24.882184",
      "status": "in-transit"
    }
  },
  {
    "id": "T028",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-58-4642",
    "capacityTons": 23.27,
    "driverId": "D028",
    "status": "en-route",
    "currentLocation": {
      "lat": 13.433121,
      "lng": 79.615479,
      "lastUpdated": "2025-04-09T17:45:24.882196"
    },
    "maintenanceLogs": [
      {
        "date": "2024-11-15T17:45:24.882200",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Madurai Truck Works",
          "address": "Highway Service Lane, Madurai",
          "mechanic": {
            "name": "Naveen",
            "contact": "+91-987651028"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "TVS Auto",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Cement",
      "loadedAt": "Vellore",
      "destination": "Erode",
      "weight": 10.44,
      "expectedArrival": "2025-04-08T17:45:24.882212",
      "status": "in-transit"
    }
  },
  {
    "id": "T029",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-97-8412",
    "capacityTons": 28.42,
    "driverId": "D029",
    "status": "en-route",
    "currentLocation": {
      "lat": 12.364458,
      "lng": 76.104875,
      "lastUpdated": "2025-04-09T17:45:24.882224"
    },
    "maintenanceLogs": [
      {
        "date": "2025-04-09T17:45:24.882228",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Chennai Truck Works",
          "address": "Highway Service Lane, Tirunelveli",
          "mechanic": {
            "name": "Rajesh",
            "contact": "+91-987651029"
          }
        },
        "partsReplaced": [
          {
            "partName": "AC Unit",
            "vendor": "TVS Auto",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Nagercoil",
      "destination": "Erode",
      "weight": 8.82,
      "expectedArrival": "2025-04-08T17:45:24.882239",
      "status": "in-transit"
    }
  },
  {
    "id": "T030",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-28-2377",
    "capacityTons": 27.28,
    "driverId": "D030",
    "status": "maintenance",
    "currentLocation": {
      "lat": 11.951882,
      "lng": 77.454714,
      "lastUpdated": "2025-04-09T17:45:24.882251"
    },
    "maintenanceLogs": [
      {
        "date": "2024-12-18T17:45:24.882255",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Nagercoil Truck Works",
          "address": "Highway Service Lane, Erode",
          "mechanic": {
            "name": "Balaji",
            "contact": "+91-987651030"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Bosch Parts",
            "warrantyMonths": 12
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Vegetables",
      "loadedAt": "Trichy",
      "destination": "Tirunelveli",
      "weight": 4.17,
      "expectedArrival": "2025-04-09T17:45:24.882267",
      "status": "in-transit"
    }
  },
  {
    "id": "T031",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-33-9532",
    "capacityTons": 24.51,
    "driverId": "D031",
    "status": "loading",
    "currentLocation": {
      "lat": 10.704388,
      "lng": 79.571645,
      "lastUpdated": "2025-04-09T17:45:24.882278"
    },
    "maintenanceLogs": [
      {
        "date": "2025-01-14T17:45:24.882283",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Erode Truck Works",
          "address": "Highway Service Lane, Madurai",
          "mechanic": {
            "name": "Suresh",
            "contact": "+91-987651031"
          }
        },
        "partsReplaced": [
          {
            "partName": "Headlight",
            "vendor": "Bosch Parts",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Vegetables",
      "loadedAt": "Vellore",
      "destination": "Chennai",
      "weight": 3.29,
      "expectedArrival": "2025-04-09T17:45:24.882295",
      "status": "in-transit"
    }
  },
  {
    "id": "T032",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-66-4269",
    "capacityTons": 24.62,
    "driverId": "D032",
    "status": "en-route",
    "currentLocation": {
      "lat": 8.181228,
      "lng": 76.275627,
      "lastUpdated": "2025-04-09T17:45:24.882314"
    },
    "maintenanceLogs": [
      {
        "date": "2025-01-28T17:45:24.882322",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Vellore Truck Works",
          "address": "Highway Service Lane, Salem",
          "mechanic": {
            "name": "Arun",
            "contact": "+91-987651032"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "TVS Auto",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Chennai",
      "destination": "Erode",
      "weight": 4.2,
      "expectedArrival": "2025-04-09T17:45:24.882341",
      "status": "in-transit"
    }
  },
  {
    "id": "T033",
    "model": "Tata Prima",
    "licensePlate": "TN-20-1236",
    "capacityTons": 17.51,
    "driverId": "D033",
    "status": "en-route",
    "currentLocation": {
      "lat": 8.080394,
      "lng": 76.897488,
      "lastUpdated": "2025-04-09T17:45:24.882371"
    },
    "maintenanceLogs": [
      {
        "date": "2025-01-23T17:45:24.882378",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Chennai Truck Works",
          "address": "Highway Service Lane, Coimbatore",
          "mechanic": {
            "name": "Balaji",
            "contact": "+91-987651033"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "Castrol India",
            "warrantyMonths": 12
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Tirunelveli",
      "destination": "Vellore",
      "weight": 10.22,
      "expectedArrival": "2025-04-09T17:45:24.882398",
      "status": "in-transit"
    }
  },
  {
    "id": "T034",
    "model": "Eicher Pro",
    "licensePlate": "TN-97-3889",
    "capacityTons": 27.84,
    "driverId": "D034",
    "status": "maintenance",
    "currentLocation": {
      "lat": 10.426653,
      "lng": 79.281459,
      "lastUpdated": "2025-04-08T17:45:24.882417"
    },
    "maintenanceLogs": [
      {
        "date": "2024-12-12T17:45:24.882422",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Coimbatore Truck Works",
          "address": "Highway Service Lane, Vellore",
          "mechanic": {
            "name": "Saravanan",
            "contact": "+91-987651034"
          }
        },
        "partsReplaced": [
          {
            "partName": "AC Unit",
            "vendor": "Bosch Parts",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Trichy",
      "destination": "Chennai",
      "weight": 11.53,
      "expectedArrival": "2025-04-08T17:45:24.882436",
      "status": "in-transit"
    }
  },
  {
    "id": "T035",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-59-9688",
    "capacityTons": 25.7,
    "driverId": "D035",
    "status": "maintenance",
    "currentLocation": {
      "lat": 8.315644,
      "lng": 80.340517,
      "lastUpdated": "2025-04-09T17:45:24.882448"
    },
    "maintenanceLogs": [
      {
        "date": "2025-03-22T17:45:24.882452",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Trichy Truck Works",
          "address": "Highway Service Lane, Vellore",
          "mechanic": {
            "name": "Vasanth",
            "contact": "+91-987651035"
          }
        },
        "partsReplaced": [
          {
            "partName": "Headlight",
            "vendor": "Bosch Parts",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Vegetables",
      "loadedAt": "Vellore",
      "destination": "Erode",
      "weight": 8.59,
      "expectedArrival": "2025-04-09T17:45:24.882463",
      "status": "in-transit"
    }
  },
  {
    "id": "T036",
    "model": "Tata Prima",
    "licensePlate": "TN-50-8482",
    "capacityTons": 13.79,
    "driverId": "D036",
    "status": "maintenance",
    "currentLocation": {
      "lat": 10.393791,
      "lng": 79.745603,
      "lastUpdated": "2025-04-09T17:45:24.882475"
    },
    "maintenanceLogs": [
      {
        "date": "2024-12-06T17:45:24.882479",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Erode Truck Works",
          "address": "Highway Service Lane, Nagercoil",
          "mechanic": {
            "name": "Vignesh",
            "contact": "+91-987651036"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "TVS Auto",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Salem",
      "destination": "Salem",
      "weight": 7.29,
      "expectedArrival": "2025-04-08T17:45:24.882490",
      "status": "in-transit"
    }
  },
  {
    "id": "T037",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-47-3021",
    "capacityTons": 24.82,
    "driverId": "D037",
    "status": "idle",
    "currentLocation": {
      "lat": 13.18203,
      "lng": 79.807543,
      "lastUpdated": "2025-04-09T17:45:24.882502"
    },
    "maintenanceLogs": [
      {
        "date": "2024-11-24T17:45:24.882506",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Tirunelveli Truck Works",
          "address": "Highway Service Lane, Vellore",
          "mechanic": {
            "name": "Murugan",
            "contact": "+91-987651037"
          }
        },
        "partsReplaced": [
          {
            "partName": "AC Unit",
            "vendor": "Castrol India",
            "warrantyMonths": 12
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Trichy",
      "destination": "Trichy",
      "weight": 9.39,
      "expectedArrival": "2025-04-09T17:45:24.882518",
      "status": "in-transit"
    }
  },
  {
    "id": "T038",
    "model": "Tata Prima",
    "licensePlate": "TN-85-7034",
    "capacityTons": 13.16,
    "driverId": "D038",
    "status": "idle",
    "currentLocation": {
      "lat": 8.150644,
      "lng": 76.946788,
      "lastUpdated": "2025-04-09T17:45:24.882530"
    },
    "maintenanceLogs": [
      {
        "date": "2025-03-14T17:45:24.882534",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Trichy Truck Works",
          "address": "Highway Service Lane, Coimbatore",
          "mechanic": {
            "name": "Ramesh",
            "contact": "+91-987651038"
          }
        },
        "partsReplaced": [
          {
            "partName": "Headlight",
            "vendor": "Castrol India",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Cement",
      "loadedAt": "Coimbatore",
      "destination": "Tirunelveli",
      "weight": 8.32,
      "expectedArrival": "2025-04-08T17:45:24.882545",
      "status": "in-transit"
    }
  },
  {
    "id": "T039",
    "model": "Eicher Pro",
    "licensePlate": "TN-23-6365",
    "capacityTons": 14.34,
    "driverId": "D039",
    "status": "maintenance",
    "currentLocation": {
      "lat": 10.688009,
      "lng": 77.673752,
      "lastUpdated": "2025-04-09T17:45:24.882557"
    },
    "maintenanceLogs": [
      {
        "date": "2024-12-20T17:45:24.882561",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Chennai Truck Works",
          "address": "Highway Service Lane, Salem",
          "mechanic": {
            "name": "Mohan",
            "contact": "+91-987651039"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "TVS Auto",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Vegetables",
      "loadedAt": "Erode",
      "destination": "Erode",
      "weight": 11.55,
      "expectedArrival": "2025-04-08T17:45:24.882573",
      "status": "in-transit"
    }
  },
  {
    "id": "T040",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-97-3044",
    "capacityTons": 27.0,
    "driverId": "D040",
    "status": "en-route",
    "currentLocation": {
      "lat": 12.489143,
      "lng": 78.449121,
      "lastUpdated": "2025-04-08T17:45:24.882585"
    },
    "maintenanceLogs": [
      {
        "date": "2024-12-29T17:45:24.882589",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Vellore Truck Works",
          "address": "Highway Service Lane, Trichy",
          "mechanic": {
            "name": "Saravanan",
            "contact": "+91-987651040"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Castrol India",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Cement",
      "loadedAt": "Erode",
      "destination": "Madurai",
      "weight": 9.46,
      "expectedArrival": "2025-04-09T17:45:24.882602",
      "status": "in-transit"
    }
  },
  {
    "id": "T041",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-38-4783",
    "capacityTons": 17.77,
    "driverId": "D041",
    "status": "en-route",
    "currentLocation": {
      "lat": 11.23403,
      "lng": 78.270006,
      "lastUpdated": "2025-04-08T17:45:24.882613"
    },
    "maintenanceLogs": [
      {
        "date": "2024-10-30T17:45:24.882617",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Madurai Truck Works",
          "address": "Highway Service Lane, Coimbatore",
          "mechanic": {
            "name": "Suresh",
            "contact": "+91-987651041"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "Bosch Parts",
            "warrantyMonths": 12
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Vellore",
      "destination": "Nagercoil",
      "weight": 10.0,
      "expectedArrival": "2025-04-08T17:45:24.882629",
      "status": "in-transit"
    }
  },
  {
    "id": "T042",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-95-4007",
    "capacityTons": 13.5,
    "driverId": "D042",
    "status": "idle",
    "currentLocation": {
      "lat": 9.885675,
      "lng": 79.401786,
      "lastUpdated": "2025-04-08T17:45:24.882641"
    },
    "maintenanceLogs": [
      {
        "date": "2025-03-01T17:45:24.882645",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Erode Truck Works",
          "address": "Highway Service Lane, Chennai",
          "mechanic": {
            "name": "Balaji",
            "contact": "+91-987651042"
          }
        },
        "partsReplaced": [
          {
            "partName": "Headlight",
            "vendor": "TVS Auto",
            "warrantyMonths": 12
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Cement",
      "loadedAt": "Madurai",
      "destination": "Madurai",
      "weight": 3.27,
      "expectedArrival": "2025-04-08T17:45:24.882657",
      "status": "in-transit"
    }
  },
  {
    "id": "T043",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-81-4636",
    "capacityTons": 22.92,
    "driverId": "D043",
    "status": "maintenance",
    "currentLocation": {
      "lat": 12.607628,
      "lng": 78.471209,
      "lastUpdated": "2025-04-08T17:45:24.882673"
    },
    "maintenanceLogs": [
      {
        "date": "2024-11-25T17:45:24.882680",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Coimbatore Truck Works",
          "address": "Highway Service Lane, Madurai",
          "mechanic": {
            "name": "Bharath",
            "contact": "+91-987651043"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Bosch Parts",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Vegetables",
      "loadedAt": "Chennai",
      "destination": "Trichy",
      "weight": 4.77,
      "expectedArrival": "2025-04-09T17:45:24.882698",
      "status": "in-transit"
    }
  },
  {
    "id": "T044",
    "model": "Eicher Pro",
    "licensePlate": "TN-41-8597",
    "capacityTons": 15.5,
    "driverId": "D044",
    "status": "idle",
    "currentLocation": {
      "lat": 10.1733,
      "lng": 76.394632,
      "lastUpdated": "2025-04-08T17:45:24.882713"
    },
    "maintenanceLogs": [
      {
        "date": "2025-02-15T17:45:24.882718",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Coimbatore Truck Works",
          "address": "Highway Service Lane, Chennai",
          "mechanic": {
            "name": "Vasanth",
            "contact": "+91-987651044"
          }
        },
        "partsReplaced": [
          {
            "partName": "Headlight",
            "vendor": "TVS Auto",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Vellore",
      "destination": "Coimbatore",
      "weight": 6.93,
      "expectedArrival": "2025-04-08T17:45:24.882728",
      "status": "in-transit"
    }
  },
  {
    "id": "T045",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-37-5433",
    "capacityTons": 21.08,
    "driverId": "D045",
    "status": "maintenance",
    "currentLocation": {
      "lat": 11.196734,
      "lng": 79.248021,
      "lastUpdated": "2025-04-08T17:45:24.882756"
    },
    "maintenanceLogs": [
      {
        "date": "2025-04-03T17:45:24.882761",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Chennai Truck Works",
          "address": "Highway Service Lane, Trichy",
          "mechanic": {
            "name": "Vignesh",
            "contact": "+91-987651045"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "Bosch Parts",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Vegetables",
      "loadedAt": "Chennai",
      "destination": "Coimbatore",
      "weight": 6.29,
      "expectedArrival": "2025-04-09T17:45:24.882772",
      "status": "in-transit"
    }
  },
  {
    "id": "T046",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-27-4742",
    "capacityTons": 24.17,
    "driverId": "D046",
    "status": "en-route",
    "currentLocation": {
      "lat": 12.75834,
      "lng": 79.290681,
      "lastUpdated": "2025-04-08T17:45:24.882784"
    },
    "maintenanceLogs": [
      {
        "date": "2025-02-06T17:45:24.882788",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Madurai Truck Works",
          "address": "Highway Service Lane, Chennai",
          "mechanic": {
            "name": "Murugan",
            "contact": "+91-987651046"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "TVS Auto",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Madurai",
      "destination": "Salem",
      "weight": 6.15,
      "expectedArrival": "2025-04-09T17:45:24.882799",
      "status": "in-transit"
    }
  },
  {
    "id": "T047",
    "model": "Tata Prima",
    "licensePlate": "TN-18-3623",
    "capacityTons": 16.78,
    "driverId": "D047",
    "status": "idle",
    "currentLocation": {
      "lat": 13.450467,
      "lng": 77.494249,
      "lastUpdated": "2025-04-09T17:45:24.882811"
    },
    "maintenanceLogs": [
      {
        "date": "2024-12-05T17:45:24.882816",
        "issue": "Oil leak",
        "serviceCenter": {
          "name": "Tirunelveli Truck Works",
          "address": "Highway Service Lane, Madurai",
          "mechanic": {
            "name": "Sathish",
            "contact": "+91-987651047"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "TVS Auto",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Cement",
      "loadedAt": "Salem",
      "destination": "Nagercoil",
      "weight": 5.23,
      "expectedArrival": "2025-04-08T17:45:24.882830",
      "status": "in-transit"
    }
  },
  {
    "id": "T048",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-67-6603",
    "capacityTons": 23.41,
    "driverId": "D048",
    "status": "idle",
    "currentLocation": {
      "lat": 11.550057,
      "lng": 78.082233,
      "lastUpdated": "2025-04-08T17:45:24.882842"
    },
    "maintenanceLogs": [
      {
        "date": "2025-03-02T17:45:24.882846",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Chennai Truck Works",
          "address": "Highway Service Lane, Chennai",
          "mechanic": {
            "name": "Dinesh",
            "contact": "+91-987651048"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "TVS Auto",
            "warrantyMonths": 12
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Cement",
      "loadedAt": "Salem",
      "destination": "Madurai",
      "weight": 8.02,
      "expectedArrival": "2025-04-09T17:45:24.882858",
      "status": "in-transit"
    }
  },
  {
    "id": "T049",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-90-6878",
    "capacityTons": 12.25,
    "driverId": "D049",
    "status": "loading",
    "currentLocation": {
      "lat": 10.69846,
      "lng": 78.087096,
      "lastUpdated": "2025-04-08T17:45:24.882872"
    },
    "maintenanceLogs": [
      {
        "date": "2024-11-28T17:45:24.882879",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Madurai Truck Works",
          "address": "Highway Service Lane, Salem",
          "mechanic": {
            "name": "Bharath",
            "contact": "+91-987651049"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Castrol India",
            "warrantyMonths": 12
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Madurai",
      "destination": "Nagercoil",
      "weight": 8.98,
      "expectedArrival": "2025-04-08T17:45:24.882899",
      "status": "in-transit"
    }
  },
  {
    "id": "T050",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-25-4588",
    "capacityTons": 11.43,
    "driverId": "D050",
    "status": "maintenance",
    "currentLocation": {
      "lat": 8.081796,
      "lng": 79.007167,
      "lastUpdated": "2025-04-08T17:45:24.882911"
    },
    "maintenanceLogs": [
      {
        "date": "2025-01-23T17:45:24.882915",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Vellore Truck Works",
          "address": "Highway Service Lane, Vellore",
          "mechanic": {
            "name": "Suresh",
            "contact": "+91-987651050"
          }
        },
        "partsReplaced": [
          {
            "partName": "AC Unit",
            "vendor": "Castrol India",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Tirunelveli",
      "destination": "Nagercoil",
      "weight": 10.22,
      "expectedArrival": "2025-04-08T17:45:24.882926",
      "status": "in-transit"
    }
  },
  {
    "id": "T051",
    "model": "Eicher Pro",
    "licensePlate": "TN-58-7217",
    "capacityTons": 17.28,
    "driverId": "D051",
    "status": "loading",
    "currentLocation": {
      "lat": 8.83802,
      "lng": 77.721393,
      "lastUpdated": "2025-04-08T17:45:24.882938"
    },
    "maintenanceLogs": [
      {
        "date": "2024-12-31T17:45:24.882942",
        "issue": "Brake pad replacement",
        "serviceCenter": {
          "name": "Madurai Truck Works",
          "address": "Highway Service Lane, Coimbatore",
          "mechanic": {
            "name": "Suresh",
            "contact": "+91-987651051"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "TVS Auto",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Cement",
      "loadedAt": "Vellore",
      "destination": "Madurai",
      "weight": 10.07,
      "expectedArrival": "2025-04-09T17:45:24.882953",
      "status": "in-transit"
    }
  },
  {
    "id": "T052",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-34-9394",
    "capacityTons": 14.59,
    "driverId": "D052",
    "status": "idle",
    "currentLocation": {
      "lat": 12.980988,
      "lng": 77.502606,
      "lastUpdated": "2025-04-09T17:45:24.882965"
    },
    "maintenanceLogs": [
      {
        "date": "2025-02-21T17:45:24.882969",
        "issue": "Brake pad replacement",
        "serviceCenter": {
          "name": "Nagercoil Truck Works",
          "address": "Highway Service Lane, Salem",
          "mechanic": {
            "name": "Karthik",
            "contact": "+91-987651052"
          }
        },
        "partsReplaced": [
          {
            "partName": "Headlight",
            "vendor": "Castrol India",
            "warrantyMonths": 12
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Cement",
      "loadedAt": "Trichy",
      "destination": "Chennai",
      "weight": 10.98,
      "expectedArrival": "2025-04-08T17:45:24.882981",
      "status": "in-transit"
    }
  },
  {
    "id": "T053",
    "model": "Tata Prima",
    "licensePlate": "TN-90-8579",
    "capacityTons": 29.66,
    "driverId": "D053",
    "status": "loading",
    "currentLocation": {
      "lat": 11.3098,
      "lng": 77.792798,
      "lastUpdated": "2025-04-08T17:45:24.882994"
    },
    "maintenanceLogs": [
      {
        "date": "2024-11-28T17:45:24.882999",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Nagercoil Truck Works",
          "address": "Highway Service Lane, Madurai",
          "mechanic": {
            "name": "Ramesh",
            "contact": "+91-987651053"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Castrol India",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Chennai",
      "destination": "Coimbatore",
      "weight": 5.67,
      "expectedArrival": "2025-04-08T17:45:24.883010",
      "status": "in-transit"
    }
  },
  {
    "id": "T054",
    "model": "Eicher Pro",
    "licensePlate": "TN-90-9510",
    "capacityTons": 28.42,
    "driverId": "D054",
    "status": "en-route",
    "currentLocation": {
      "lat": 12.275782,
      "lng": 77.035682,
      "lastUpdated": "2025-04-09T17:45:24.883023"
    },
    "maintenanceLogs": [
      {
        "date": "2024-11-27T17:45:24.883028",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Tirunelveli Truck Works",
          "address": "Highway Service Lane, Erode",
          "mechanic": {
            "name": "Vignesh",
            "contact": "+91-987651054"
          }
        },
        "partsReplaced": [
          {
            "partName": "Headlight",
            "vendor": "Bosch Parts",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Tirunelveli",
      "destination": "Coimbatore",
      "weight": 4.18,
      "expectedArrival": "2025-04-09T17:45:24.883047",
      "status": "in-transit"
    }
  },
  {
    "id": "T055",
    "model": "Tata Prima",
    "licensePlate": "TN-74-4970",
    "capacityTons": 29.76,
    "driverId": "D055",
    "status": "loading",
    "currentLocation": {
      "lat": 9.064484,
      "lng": 80.251133,
      "lastUpdated": "2025-04-09T17:45:24.883062"
    },
    "maintenanceLogs": [
      {
        "date": "2025-02-06T17:45:24.883067",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Nagercoil Truck Works",
          "address": "Highway Service Lane, Erode",
          "mechanic": {
            "name": "Kumar",
            "contact": "+91-987651055"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "TVS Auto",
            "warrantyMonths": 12
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Vellore",
      "destination": "Trichy",
      "weight": 11.95,
      "expectedArrival": "2025-04-08T17:45:24.883079",
      "status": "in-transit"
    }
  },
  {
    "id": "T056",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-17-9021",
    "capacityTons": 12.59,
    "driverId": "D056",
    "status": "maintenance",
    "currentLocation": {
      "lat": 10.67747,
      "lng": 80.205507,
      "lastUpdated": "2025-04-09T17:45:24.883091"
    },
    "maintenanceLogs": [
      {
        "date": "2025-02-02T17:45:24.883096",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Erode Truck Works",
          "address": "Highway Service Lane, Nagercoil",
          "mechanic": {
            "name": "Elango",
            "contact": "+91-987651056"
          }
        },
        "partsReplaced": [
          {
            "partName": "AC Unit",
            "vendor": "Bosch Parts",
            "warrantyMonths": 18
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Trichy",
      "destination": "Chennai",
      "weight": 8.83,
      "expectedArrival": "2025-04-09T17:45:24.883106",
      "status": "in-transit"
    }
  },
  {
    "id": "T057",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-37-5011",
    "capacityTons": 25.64,
    "driverId": "D057",
    "status": "loading",
    "currentLocation": {
      "lat": 10.241605,
      "lng": 77.371459,
      "lastUpdated": "2025-04-08T17:45:24.883122"
    },
    "maintenanceLogs": [
      {
        "date": "2025-01-06T17:45:24.883128",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Chennai Truck Works",
          "address": "Highway Service Lane, Nagercoil",
          "mechanic": {
            "name": "Harish",
            "contact": "+91-987651057"
          }
        },
        "partsReplaced": [
          {
            "partName": "Brake Pad",
            "vendor": "Bosch Parts",
            "warrantyMonths": 12
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Cement",
      "loadedAt": "Nagercoil",
      "destination": "Madurai",
      "weight": 8.53,
      "expectedArrival": "2025-04-09T17:45:24.883146",
      "status": "in-transit"
    }
  },
  {
    "id": "T058",
    "model": "Tata Prima",
    "licensePlate": "TN-66-4265",
    "capacityTons": 27.18,
    "driverId": "D058",
    "status": "loading",
    "currentLocation": {
      "lat": 13.241726,
      "lng": 79.596015,
      "lastUpdated": "2025-04-09T17:45:24.883163"
    },
    "maintenanceLogs": [
      {
        "date": "2025-01-09T17:45:24.883169",
        "issue": "AC not cooling",
        "serviceCenter": {
          "name": "Erode Truck Works",
          "address": "Highway Service Lane, Nagercoil",
          "mechanic": {
            "name": "Arun",
            "contact": "+91-987651058"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "TVS Auto",
            "warrantyMonths": 12
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Nagercoil",
      "destination": "Vellore",
      "weight": 6.61,
      "expectedArrival": "2025-04-09T17:45:24.883185",
      "status": "in-transit"
    }
  },
  {
    "id": "T059",
    "model": "Eicher Pro",
    "licensePlate": "TN-14-4112",
    "capacityTons": 21.09,
    "driverId": "D059",
    "status": "idle",
    "currentLocation": {
      "lat": 8.595003,
      "lng": 78.755497,
      "lastUpdated": "2025-04-09T17:45:24.883203"
    },
    "maintenanceLogs": [
      {
        "date": "2024-12-17T17:45:24.883210",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Coimbatore Truck Works",
          "address": "Highway Service Lane, Madurai",
          "mechanic": {
            "name": "Suresh",
            "contact": "+91-987651059"
          }
        },
        "partsReplaced": [
          {
            "partName": "Oil Filter",
            "vendor": "TVS Auto",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Fruits",
      "loadedAt": "Tirunelveli",
      "destination": "Vellore",
      "weight": 9.88,
      "expectedArrival": "2025-04-08T17:45:24.883230",
      "status": "in-transit"
    }
  },
  {
    "id": "T060",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-77-9982",
    "capacityTons": 10.44,
    "driverId": "D060",
    "status": "en-route",
    "currentLocation": {
      "lat": 8.146969,
      "lng": 78.521851,
      "lastUpdated": "2025-04-09T17:45:24.883249"
    },
    "maintenanceLogs": [
      {
        "date": "2024-12-30T17:45:24.883256",
        "issue": "Headlight repair",
        "serviceCenter": {
          "name": "Nagercoil Truck Works",
          "address": "Highway Service Lane, Tirunelveli",
          "mechanic": {
            "name": "Karthik",
            "contact": "+91-987651060"
          }
        },
        "partsReplaced": [
          {
            "partName": "Headlight",
            "vendor": "Bosch Parts",
            "warrantyMonths": 6
          }
        ]
      }
    ],
    "liveLoad": {
      "cargoType": "Textiles",
      "loadedAt": "Trichy",
      "destination": "Erode",
      "weight": 10.87,
      "expectedArrival": "2025-04-08T17:45:24.883275",
      "status": "in-transit"
    }
  }
];

module.exports = { drivers, trucks };