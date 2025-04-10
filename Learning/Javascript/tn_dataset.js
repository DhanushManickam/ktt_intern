const drivers = [
  {
    "id": "D001",
    "name": "Vasanth Parthiban",
    "licenseNumber": "TN-66-392924",
    "phone": "+91-9876543101",
    "assignedTruckId": "T038",
    "status": "active",
    "experienceYears": 17,
    "serviceHistory": [
      {
        "date": "2024-09-20",
        "description": "Oil change"
      },
      {
        "date": "2025-04-06",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D002",
    "name": "Tharun Lokesh",
    "licenseNumber": "TN-93-450123",
    "phone": "+91-9876543102",
    "assignedTruckId": "T006",
    "status": "off-duty",
    "experienceYears": 14,
    "serviceHistory": [
      {
        "date": "2024-07-23",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D003",
    "name": "Murugan Ramesh",
    "licenseNumber": "TN-53-361801",
    "phone": "+91-9876543103",
    "assignedTruckId": "T033",
    "status": "on-duty",
    "experienceYears": 3,
    "serviceHistory": [
      {
        "date": "2024-11-08",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D004",
    "name": "Yuvan Jeeva",
    "licenseNumber": "TN-96-135962",
    "phone": "+91-9876543104",
    "assignedTruckId": "T058",
    "status": "off-duty",
    "experienceYears": 17,
    "serviceHistory": [
      {
        "date": "2025-03-29",
        "description": "Tire replacement"
      },
      {
        "date": "2024-12-29",
        "description": "Engine tuning"
      },
      {
        "date": "2025-01-05",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D005",
    "name": "Surya Sriram",
    "licenseNumber": "TN-33-272769",
    "phone": "+91-9876543105",
    "assignedTruckId": "T013",
    "status": "inactive",
    "experienceYears": 3,
    "serviceHistory": [
      {
        "date": "2024-06-14",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D006",
    "name": "Rajesh Vimal",
    "licenseNumber": "TN-91-169798",
    "phone": "+91-9876543106",
    "assignedTruckId": "T038",
    "status": "off-duty",
    "experienceYears": 16,
    "serviceHistory": [
      {
        "date": "2024-12-24",
        "description": "Engine tuning"
      },
      {
        "date": "2024-11-30",
        "description": "Engine tuning"
      },
      {
        "date": "2025-02-11",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D007",
    "name": "Jeeva Sanjay",
    "licenseNumber": "TN-42-342942",
    "phone": "+91-9876543107",
    "assignedTruckId": "T017",
    "status": "inactive",
    "experienceYears": 10,
    "serviceHistory": [
      {
        "date": "2024-09-25",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D008",
    "name": "Murugan Suresh",
    "licenseNumber": "TN-16-202181",
    "phone": "+91-9876543108",
    "assignedTruckId": "T044",
    "status": "active",
    "experienceYears": 2,
    "serviceHistory": [
      {
        "date": "2024-11-03",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D009",
    "name": "Sathish Kavin",
    "licenseNumber": "TN-49-785529",
    "phone": "+91-9876543109",
    "assignedTruckId": "T039",
    "status": "on-duty",
    "experienceYears": 13,
    "serviceHistory": [
      {
        "date": "2024-11-02",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D010",
    "name": "Vignesh Sriram",
    "licenseNumber": "TN-49-311491",
    "phone": "+91-9876543110",
    "assignedTruckId": "T055",
    "status": "inactive",
    "experienceYears": 5,
    "serviceHistory": [
      {
        "date": "2024-11-19",
        "description": "Brake inspection"
      },
      {
        "date": "2025-01-03",
        "description": "Oil change"
      },
      {
        "date": "2024-12-15",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D011",
    "name": "Mohan Kumar",
    "licenseNumber": "TN-61-724310",
    "phone": "+91-9876543111",
    "assignedTruckId": "T034",
    "status": "inactive",
    "experienceYears": 1,
    "serviceHistory": [
      {
        "date": "2024-10-06",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D012",
    "name": "Harish Bharath",
    "licenseNumber": "TN-22-676063",
    "phone": "+91-9876543112",
    "assignedTruckId": "T015",
    "status": "off-duty",
    "experienceYears": 14,
    "serviceHistory": [
      {
        "date": "2024-11-08",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D013",
    "name": "Ajith Bharath",
    "licenseNumber": "TN-62-414190",
    "phone": "+91-9876543113",
    "assignedTruckId": "T021",
    "status": "active",
    "experienceYears": 8,
    "serviceHistory": [
      {
        "date": "2025-02-23",
        "description": "Brake inspection"
      },
      {
        "date": "2024-04-28",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D014",
    "name": "Sibi Kumar",
    "licenseNumber": "TN-63-569748",
    "phone": "+91-9876543114",
    "assignedTruckId": "T049",
    "status": "active",
    "experienceYears": 12,
    "serviceHistory": [
      {
        "date": "2025-02-05",
        "description": "Engine tuning"
      },
      {
        "date": "2024-07-23",
        "description": "Oil change"
      },
      {
        "date": "2024-04-28",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D015",
    "name": "Murugan Bharath",
    "licenseNumber": "TN-83-297941",
    "phone": "+91-9876543115",
    "assignedTruckId": "T037",
    "status": "on-duty",
    "experienceYears": 18,
    "serviceHistory": [
      {
        "date": "2024-05-10",
        "description": "Tire replacement"
      },
      {
        "date": "2025-02-17",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D016",
    "name": "Dinesh Anand",
    "licenseNumber": "TN-35-559165",
    "phone": "+91-9876543116",
    "assignedTruckId": "T030",
    "status": "active",
    "experienceYears": 11,
    "serviceHistory": [
      {
        "date": "2025-01-08",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D017",
    "name": "Ramesh Sathish",
    "licenseNumber": "TN-60-334631",
    "phone": "+91-9876543117",
    "assignedTruckId": "T013",
    "status": "off-duty",
    "experienceYears": 2,
    "serviceHistory": [
      {
        "date": "2024-08-11",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D018",
    "name": "Manikandan Prakash",
    "licenseNumber": "TN-60-552376",
    "phone": "+91-9876543118",
    "assignedTruckId": "T007",
    "status": "off-duty",
    "experienceYears": 4,
    "serviceHistory": [
      {
        "date": "2024-11-29",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D019",
    "name": "Jeeva Senthil",
    "licenseNumber": "TN-72-559184",
    "phone": "+91-9876543119",
    "assignedTruckId": "T040",
    "status": "active",
    "experienceYears": 13,
    "serviceHistory": [
      {
        "date": "2024-04-20",
        "description": "Tire replacement"
      },
      {
        "date": "2024-07-21",
        "description": "Oil change"
      },
      {
        "date": "2025-03-14",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D020",
    "name": "Saravanan Kumar",
    "licenseNumber": "TN-63-740622",
    "phone": "+91-9876543120",
    "assignedTruckId": "T015",
    "status": "off-duty",
    "experienceYears": 10,
    "serviceHistory": [
      {
        "date": "2024-09-20",
        "description": "Brake inspection"
      },
      {
        "date": "2024-04-09",
        "description": "Oil change"
      },
      {
        "date": "2024-10-04",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D021",
    "name": "Manikandan Vasanth",
    "licenseNumber": "TN-27-908793",
    "phone": "+91-9876543121",
    "assignedTruckId": "T004",
    "status": "inactive",
    "experienceYears": 15,
    "serviceHistory": [
      {
        "date": "2025-04-03",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D022",
    "name": "Kumar Vignesh",
    "licenseNumber": "TN-53-660051",
    "phone": "+91-9876543122",
    "assignedTruckId": "T024",
    "status": "inactive",
    "experienceYears": 10,
    "serviceHistory": [
      {
        "date": "2025-03-20",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D023",
    "name": "Sibi Vimal",
    "licenseNumber": "TN-34-514079",
    "phone": "+91-9876543123",
    "assignedTruckId": "T049",
    "status": "on-duty",
    "experienceYears": 18,
    "serviceHistory": [
      {
        "date": "2025-01-05",
        "description": "Oil change"
      },
      {
        "date": "2024-10-21",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D024",
    "name": "Dinesh Murugan",
    "licenseNumber": "TN-50-460801",
    "phone": "+91-9876543124",
    "assignedTruckId": "T058",
    "status": "active",
    "experienceYears": 16,
    "serviceHistory": [
      {
        "date": "2024-11-20",
        "description": "Oil change"
      },
      {
        "date": "2024-07-08",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D025",
    "name": "Karthik Kumar",
    "licenseNumber": "TN-40-932685",
    "phone": "+91-9876543125",
    "assignedTruckId": "T002",
    "status": "off-duty",
    "experienceYears": 4,
    "serviceHistory": [
      {
        "date": "2024-09-07",
        "description": "Engine tuning"
      },
      {
        "date": "2024-04-23",
        "description": "Tire replacement"
      },
      {
        "date": "2024-09-20",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D026",
    "name": "Naveen Gokul",
    "licenseNumber": "TN-56-777878",
    "phone": "+91-9876543126",
    "assignedTruckId": "T009",
    "status": "active",
    "experienceYears": 5,
    "serviceHistory": [
      {
        "date": "2025-04-04",
        "description": "Tire replacement"
      },
      {
        "date": "2024-08-16",
        "description": "Oil change"
      },
      {
        "date": "2025-01-02",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D027",
    "name": "Murugan Arun",
    "licenseNumber": "TN-21-479481",
    "phone": "+91-9876543127",
    "assignedTruckId": "T028",
    "status": "active",
    "experienceYears": 16,
    "serviceHistory": [
      {
        "date": "2024-07-31",
        "description": "Engine tuning"
      },
      {
        "date": "2024-08-19",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D028",
    "name": "Murugan Mohan",
    "licenseNumber": "TN-73-756232",
    "phone": "+91-9876543128",
    "assignedTruckId": "T027",
    "status": "inactive",
    "experienceYears": 20,
    "serviceHistory": [
      {
        "date": "2024-08-28",
        "description": "Tire replacement"
      },
      {
        "date": "2024-09-20",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D029",
    "name": "Karthik Tharun",
    "licenseNumber": "TN-23-736345",
    "phone": "+91-9876543129",
    "assignedTruckId": "T004",
    "status": "off-duty",
    "experienceYears": 1,
    "serviceHistory": [
      {
        "date": "2024-05-13",
        "description": "Tire replacement"
      },
      {
        "date": "2024-11-19",
        "description": "Oil change"
      },
      {
        "date": "2024-08-02",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D030",
    "name": "Sriram Mohan",
    "licenseNumber": "TN-95-106333",
    "phone": "+91-9876543130",
    "assignedTruckId": "T032",
    "status": "inactive",
    "experienceYears": 12,
    "serviceHistory": [
      {
        "date": "2024-12-04",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D031",
    "name": "Suresh Vasanth",
    "licenseNumber": "TN-58-545128",
    "phone": "+91-9876543131",
    "assignedTruckId": "T014",
    "status": "on-duty",
    "experienceYears": 9,
    "serviceHistory": [
      {
        "date": "2024-06-22",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D032",
    "name": "Vignesh Ragul",
    "licenseNumber": "TN-60-959000",
    "phone": "+91-9876543132",
    "assignedTruckId": "T004",
    "status": "inactive",
    "experienceYears": 5,
    "serviceHistory": [
      {
        "date": "2024-05-14",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D033",
    "name": "Gokul Jeeva",
    "licenseNumber": "TN-87-291112",
    "phone": "+91-9876543133",
    "assignedTruckId": "T031",
    "status": "off-duty",
    "experienceYears": 3,
    "serviceHistory": [
      {
        "date": "2024-12-23",
        "description": "Engine tuning"
      },
      {
        "date": "2024-04-09",
        "description": "Engine tuning"
      },
      {
        "date": "2024-11-20",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D034",
    "name": "Jeeva Anand",
    "licenseNumber": "TN-19-853850",
    "phone": "+91-9876543134",
    "assignedTruckId": "T059",
    "status": "on-duty",
    "experienceYears": 10,
    "serviceHistory": [
      {
        "date": "2024-04-24",
        "description": "Engine tuning"
      },
      {
        "date": "2024-05-19",
        "description": "Oil change"
      },
      {
        "date": "2024-09-11",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D035",
    "name": "Karthik Rajesh",
    "licenseNumber": "TN-10-310369",
    "phone": "+91-9876543135",
    "assignedTruckId": "T040",
    "status": "active",
    "experienceYears": 2,
    "serviceHistory": [
      {
        "date": "2024-12-20",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D036",
    "name": "Kavin Murugan",
    "licenseNumber": "TN-86-793893",
    "phone": "+91-9876543136",
    "assignedTruckId": "T041",
    "status": "active",
    "experienceYears": 1,
    "serviceHistory": [
      {
        "date": "2024-06-07",
        "description": "Brake inspection"
      },
      {
        "date": "2024-10-16",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D037",
    "name": "Ragul Lokesh",
    "licenseNumber": "TN-41-832186",
    "phone": "+91-9876543137",
    "assignedTruckId": "T014",
    "status": "on-duty",
    "experienceYears": 10,
    "serviceHistory": [
      {
        "date": "2025-02-17",
        "description": "Oil change"
      },
      {
        "date": "2024-05-26",
        "description": "Brake inspection"
      },
      {
        "date": "2024-09-30",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D038",
    "name": "Gokul Bharath",
    "licenseNumber": "TN-71-332583",
    "phone": "+91-9876543138",
    "assignedTruckId": "T002",
    "status": "off-duty",
    "experienceYears": 11,
    "serviceHistory": [
      {
        "date": "2024-07-04",
        "description": "Oil change"
      },
      {
        "date": "2024-10-29",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D039",
    "name": "Vasanth Sundar",
    "licenseNumber": "TN-44-740462",
    "phone": "+91-9876543139",
    "assignedTruckId": "T015",
    "status": "inactive",
    "experienceYears": 2,
    "serviceHistory": [
      {
        "date": "2024-08-30",
        "description": "Engine tuning"
      },
      {
        "date": "2024-04-27",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D040",
    "name": "Murugan Parthiban",
    "licenseNumber": "TN-14-520106",
    "phone": "+91-9876543140",
    "assignedTruckId": "T006",
    "status": "on-duty",
    "experienceYears": 15,
    "serviceHistory": [
      {
        "date": "2024-11-14",
        "description": "Brake inspection"
      },
      {
        "date": "2024-12-04",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D041",
    "name": "Vikram Mohan",
    "licenseNumber": "TN-55-863386",
    "phone": "+91-9876543141",
    "assignedTruckId": "T007",
    "status": "active",
    "experienceYears": 4,
    "serviceHistory": [
      {
        "date": "2024-12-07",
        "description": "Tire replacement"
      },
      {
        "date": "2025-03-12",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D042",
    "name": "Gokul Vasanth",
    "licenseNumber": "TN-10-393770",
    "phone": "+91-9876543142",
    "assignedTruckId": "T034",
    "status": "on-duty",
    "experienceYears": 3,
    "serviceHistory": [
      {
        "date": "2024-05-10",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D043",
    "name": "Deepak Manikandan",
    "licenseNumber": "TN-30-364589",
    "phone": "+91-9876543143",
    "assignedTruckId": "T039",
    "status": "off-duty",
    "experienceYears": 12,
    "serviceHistory": [
      {
        "date": "2024-04-21",
        "description": "Brake inspection"
      },
      {
        "date": "2024-11-17",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D044",
    "name": "Balaji Balaji",
    "licenseNumber": "TN-56-234014",
    "phone": "+91-9876543144",
    "assignedTruckId": "T013",
    "status": "off-duty",
    "experienceYears": 18,
    "serviceHistory": [
      {
        "date": "2025-03-27",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D045",
    "name": "Elango Rajesh",
    "licenseNumber": "TN-62-415834",
    "phone": "+91-9876543145",
    "assignedTruckId": "T040",
    "status": "on-duty",
    "experienceYears": 2,
    "serviceHistory": [
      {
        "date": "2024-05-20",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D046",
    "name": "Anand Arun",
    "licenseNumber": "TN-82-424732",
    "phone": "+91-9876543146",
    "assignedTruckId": "T044",
    "status": "off-duty",
    "experienceYears": 8,
    "serviceHistory": [
      {
        "date": "2024-06-11",
        "description": "Brake inspection"
      },
      {
        "date": "2025-03-14",
        "description": "Oil change"
      },
      {
        "date": "2024-11-28",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D047",
    "name": "Deepak Anand",
    "licenseNumber": "TN-30-583131",
    "phone": "+91-9876543147",
    "assignedTruckId": "T024",
    "status": "off-duty",
    "experienceYears": 16,
    "serviceHistory": [
      {
        "date": "2024-11-01",
        "description": "Tire replacement"
      },
      {
        "date": "2024-08-11",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D048",
    "name": "Sriram Rajesh",
    "licenseNumber": "TN-81-216711",
    "phone": "+91-9876543148",
    "assignedTruckId": "T003",
    "status": "active",
    "experienceYears": 18,
    "serviceHistory": [
      {
        "date": "2024-06-15",
        "description": "Tire replacement"
      },
      {
        "date": "2024-09-17",
        "description": "Engine tuning"
      },
      {
        "date": "2024-11-10",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D049",
    "name": "Sathish Naveen",
    "licenseNumber": "TN-28-692854",
    "phone": "+91-9876543149",
    "assignedTruckId": "T057",
    "status": "on-duty",
    "experienceYears": 12,
    "serviceHistory": [
      {
        "date": "2024-10-07",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D050",
    "name": "Saravanan Mohan",
    "licenseNumber": "TN-42-109553",
    "phone": "+91-9876543150",
    "assignedTruckId": "T024",
    "status": "inactive",
    "experienceYears": 20,
    "serviceHistory": [
      {
        "date": "2024-06-14",
        "description": "Tire replacement"
      },
      {
        "date": "2024-11-10",
        "description": "Tire replacement"
      },
      {
        "date": "2024-11-20",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D051",
    "name": "Murugan Gokul",
    "licenseNumber": "TN-83-829609",
    "phone": "+91-9876543151",
    "assignedTruckId": "T011",
    "status": "active",
    "experienceYears": 8,
    "serviceHistory": [
      {
        "date": "2024-10-19",
        "description": "Oil change"
      },
      {
        "date": "2024-07-12",
        "description": "Oil change"
      },
      {
        "date": "2024-11-29",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D052",
    "name": "Suresh Manikandan",
    "licenseNumber": "TN-99-881295",
    "phone": "+91-9876543152",
    "assignedTruckId": "T023",
    "status": "off-duty",
    "experienceYears": 2,
    "serviceHistory": [
      {
        "date": "2024-09-28",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D053",
    "name": "Suresh Tharun",
    "licenseNumber": "TN-72-671720",
    "phone": "+91-9876543153",
    "assignedTruckId": "T021",
    "status": "on-duty",
    "experienceYears": 1,
    "serviceHistory": [
      {
        "date": "2024-12-30",
        "description": "Brake inspection"
      },
      {
        "date": "2024-09-29",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D054",
    "name": "Anand Murugan",
    "licenseNumber": "TN-68-707354",
    "phone": "+91-9876543154",
    "assignedTruckId": "T051",
    "status": "active",
    "experienceYears": 5,
    "serviceHistory": [
      {
        "date": "2024-08-25",
        "description": "Brake inspection"
      },
      {
        "date": "2024-12-01",
        "description": "Oil change"
      },
      {
        "date": "2024-12-21",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D055",
    "name": "Sriram Dinesh",
    "licenseNumber": "TN-77-968694",
    "phone": "+91-9876543155",
    "assignedTruckId": "T014",
    "status": "off-duty",
    "experienceYears": 12,
    "serviceHistory": [
      {
        "date": "2024-09-02",
        "description": "Oil change"
      },
      {
        "date": "2024-05-14",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D056",
    "name": "Ram Manikandan",
    "licenseNumber": "TN-19-719628",
    "phone": "+91-9876543156",
    "assignedTruckId": "T007",
    "status": "off-duty",
    "experienceYears": 2,
    "serviceHistory": [
      {
        "date": "2024-11-02",
        "description": "Oil change"
      },
      {
        "date": "2024-07-27",
        "description": "Oil change"
      },
      {
        "date": "2024-11-09",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D057",
    "name": "Ramesh Surya",
    "licenseNumber": "TN-49-934295",
    "phone": "+91-9876543157",
    "assignedTruckId": "T012",
    "status": "on-duty",
    "experienceYears": 16,
    "serviceHistory": [
      {
        "date": "2024-11-23",
        "description": "Tire replacement"
      },
      {
        "date": "2024-07-27",
        "description": "Tire replacement"
      },
      {
        "date": "2024-10-23",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D058",
    "name": "Senthil Mohan",
    "licenseNumber": "TN-99-152204",
    "phone": "+91-9876543158",
    "assignedTruckId": "T040",
    "status": "inactive",
    "experienceYears": 18,
    "serviceHistory": [
      {
        "date": "2025-02-21",
        "description": "Tire replacement"
      },
      {
        "date": "2024-12-18",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D059",
    "name": "Murugan Anand",
    "licenseNumber": "TN-93-295066",
    "phone": "+91-9876543159",
    "assignedTruckId": "T007",
    "status": "inactive",
    "experienceYears": 9,
    "serviceHistory": [
      {
        "date": "2024-05-08",
        "description": "Brake inspection"
      },
      {
        "date": "2024-06-20",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D060",
    "name": "Balaji Kumar",
    "licenseNumber": "TN-15-373899",
    "phone": "+91-9876543160",
    "assignedTruckId": "T026",
    "status": "off-duty",
    "experienceYears": 9,
    "serviceHistory": [
      {
        "date": "2024-12-21",
        "description": "Oil change"
      },
      {
        "date": "2024-10-27",
        "description": "Tire replacement"
      },
      {
        "date": "2024-09-21",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D061",
    "name": "Bharath Karthik",
    "licenseNumber": "TN-94-478400",
    "phone": "+91-9876543161",
    "assignedTruckId": null,
    "status": "active",
    "experienceYears": 7,
    "serviceHistory": [
      {
        "date": "2025-03-14",
        "description": "Tire replacement"
      },
      {
        "date": "2025-01-29",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D062",
    "name": "Harish Surya",
    "licenseNumber": "TN-87-202183",
    "phone": "+91-9876543162",
    "assignedTruckId": null,
    "status": "inactive",
    "experienceYears": 18,
    "serviceHistory": [
      {
        "date": "2024-12-10",
        "description": "Tire replacement"
      },
      {
        "date": "2024-06-05",
        "description": "Tire replacement"
      },
      {
        "date": "2025-03-21",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D063",
    "name": "Sanjay Deepak",
    "licenseNumber": "TN-85-364110",
    "phone": "+91-9876543163",
    "assignedTruckId": null,
    "status": "active",
    "experienceYears": 17,
    "serviceHistory": [
      {
        "date": "2024-04-23",
        "description": "Oil change"
      },
      {
        "date": "2025-03-04",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D064",
    "name": "Suresh Gokul",
    "licenseNumber": "TN-32-359628",
    "phone": "+91-9876543164",
    "assignedTruckId": null,
    "status": "inactive",
    "experienceYears": 18,
    "serviceHistory": [
      {
        "date": "2024-06-25",
        "description": "Engine tuning"
      },
      {
        "date": "2024-10-20",
        "description": "Tire replacement"
      },
      {
        "date": "2025-02-22",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D065",
    "name": "Sanjay Anand",
    "licenseNumber": "TN-58-451922",
    "phone": "+91-9876543165",
    "assignedTruckId": null,
    "status": "on-duty",
    "experienceYears": 15,
    "serviceHistory": [
      {
        "date": "2024-04-15",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D066",
    "name": "Parthiban Sibi",
    "licenseNumber": "TN-91-210236",
    "phone": "+91-9876543166",
    "assignedTruckId": null,
    "status": "off-duty",
    "experienceYears": 4,
    "serviceHistory": [
      {
        "date": "2025-03-04",
        "description": "Brake inspection"
      },
      {
        "date": "2024-07-22",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D067",
    "name": "Ram Kumar",
    "licenseNumber": "TN-85-547684",
    "phone": "+91-9876543167",
    "assignedTruckId": null,
    "status": "active",
    "experienceYears": 1,
    "serviceHistory": [
      {
        "date": "2024-07-14",
        "description": "Tire replacement"
      },
      {
        "date": "2024-08-21",
        "description": "Engine tuning"
      },
      {
        "date": "2024-06-19",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D068",
    "name": "Rajesh Kumar",
    "licenseNumber": "TN-93-260851",
    "phone": "+91-9876543168",
    "assignedTruckId": null,
    "status": "off-duty",
    "experienceYears": 20,
    "serviceHistory": [
      {
        "date": "2024-10-15",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D069",
    "name": "Senthil Sathish",
    "licenseNumber": "TN-65-800313",
    "phone": "+91-9876543169",
    "assignedTruckId": null,
    "status": "active",
    "experienceYears": 6,
    "serviceHistory": [
      {
        "date": "2024-12-15",
        "description": "Oil change"
      },
      {
        "date": "2024-11-14",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D070",
    "name": "Sibi Surya",
    "licenseNumber": "TN-66-461883",
    "phone": "+91-9876543170",
    "assignedTruckId": null,
    "status": "inactive",
    "experienceYears": 15,
    "serviceHistory": [
      {
        "date": "2024-12-09",
        "description": "Brake inspection"
      },
      {
        "date": "2025-03-14",
        "description": "Engine tuning"
      },
      {
        "date": "2024-06-15",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D071",
    "name": "Tharun Deepak",
    "licenseNumber": "TN-99-698862",
    "phone": "+91-9876543171",
    "assignedTruckId": null,
    "status": "inactive",
    "experienceYears": 16,
    "serviceHistory": [
      {
        "date": "2025-01-20",
        "description": "Brake inspection"
      },
      {
        "date": "2024-08-27",
        "description": "Brake inspection"
      },
      {
        "date": "2024-05-05",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D072",
    "name": "Naveen Suresh",
    "licenseNumber": "TN-88-677528",
    "phone": "+91-9876543172",
    "assignedTruckId": null,
    "status": "on-duty",
    "experienceYears": 6,
    "serviceHistory": [
      {
        "date": "2024-09-30",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D073",
    "name": "Jeeva Manikandan",
    "licenseNumber": "TN-88-425832",
    "phone": "+91-9876543173",
    "assignedTruckId": null,
    "status": "active",
    "experienceYears": 18,
    "serviceHistory": [
      {
        "date": "2024-07-26",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D074",
    "name": "Lokesh Manikandan",
    "licenseNumber": "TN-24-489448",
    "phone": "+91-9876543174",
    "assignedTruckId": null,
    "status": "on-duty",
    "experienceYears": 17,
    "serviceHistory": [
      {
        "date": "2024-12-09",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D075",
    "name": "Kavin Manikandan",
    "licenseNumber": "TN-65-247947",
    "phone": "+91-9876543175",
    "assignedTruckId": null,
    "status": "off-duty",
    "experienceYears": 16,
    "serviceHistory": [
      {
        "date": "2024-06-22",
        "description": "Tire replacement"
      },
      {
        "date": "2024-09-08",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D076",
    "name": "Saravanan Murugan",
    "licenseNumber": "TN-10-396266",
    "phone": "+91-9876543176",
    "assignedTruckId": null,
    "status": "active",
    "experienceYears": 7,
    "serviceHistory": [
      {
        "date": "2024-08-11",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D077",
    "name": "Harish Vasanth",
    "licenseNumber": "TN-21-350570",
    "phone": "+91-9876543177",
    "assignedTruckId": null,
    "status": "inactive",
    "experienceYears": 5,
    "serviceHistory": [
      {
        "date": "2024-05-16",
        "description": "Oil change"
      },
      {
        "date": "2024-04-26",
        "description": "Tire replacement"
      },
      {
        "date": "2024-12-07",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D078",
    "name": "Murugan Bharath",
    "licenseNumber": "TN-78-537110",
    "phone": "+91-9876543178",
    "assignedTruckId": null,
    "status": "off-duty",
    "experienceYears": 11,
    "serviceHistory": [
      {
        "date": "2024-04-26",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D079",
    "name": "Senthil Vignesh",
    "licenseNumber": "TN-80-797150",
    "phone": "+91-9876543179",
    "assignedTruckId": null,
    "status": "inactive",
    "experienceYears": 5,
    "serviceHistory": [
      {
        "date": "2025-02-04",
        "description": "Engine tuning"
      },
      {
        "date": "2024-04-20",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D080",
    "name": "Sibi Mohan",
    "licenseNumber": "TN-61-501402",
    "phone": "+91-9876543180",
    "assignedTruckId": null,
    "status": "inactive",
    "experienceYears": 10,
    "serviceHistory": [
      {
        "date": "2024-04-25",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D081",
    "name": "Vimal Jeeva",
    "licenseNumber": "TN-16-954931",
    "phone": "+91-9876543181",
    "assignedTruckId": null,
    "status": "inactive",
    "experienceYears": 10,
    "serviceHistory": [
      {
        "date": "2025-02-21",
        "description": "Oil change"
      },
      {
        "date": "2025-03-24",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D082",
    "name": "Sanjay Ram",
    "licenseNumber": "TN-57-871255",
    "phone": "+91-9876543182",
    "assignedTruckId": null,
    "status": "active",
    "experienceYears": 15,
    "serviceHistory": [
      {
        "date": "2025-03-31",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D083",
    "name": "Vimal Deepak",
    "licenseNumber": "TN-72-406222",
    "phone": "+91-9876543183",
    "assignedTruckId": null,
    "status": "active",
    "experienceYears": 16,
    "serviceHistory": [
      {
        "date": "2024-06-07",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D084",
    "name": "Tharun Sathish",
    "licenseNumber": "TN-71-349018",
    "phone": "+91-9876543184",
    "assignedTruckId": null,
    "status": "on-duty",
    "experienceYears": 18,
    "serviceHistory": [
      {
        "date": "2024-11-08",
        "description": "Engine tuning"
      },
      {
        "date": "2025-03-12",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D085",
    "name": "Sriram Sriram",
    "licenseNumber": "TN-22-503435",
    "phone": "+91-9876543185",
    "assignedTruckId": null,
    "status": "inactive",
    "experienceYears": 4,
    "serviceHistory": [
      {
        "date": "2024-05-28",
        "description": "Tire replacement"
      },
      {
        "date": "2024-04-14",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D086",
    "name": "Vignesh Vikram",
    "licenseNumber": "TN-72-298079",
    "phone": "+91-9876543186",
    "assignedTruckId": null,
    "status": "on-duty",
    "experienceYears": 2,
    "serviceHistory": [
      {
        "date": "2024-07-10",
        "description": "Engine tuning"
      },
      {
        "date": "2024-11-02",
        "description": "Engine tuning"
      },
      {
        "date": "2024-07-14",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D087",
    "name": "Vikram Naveen",
    "licenseNumber": "TN-92-463779",
    "phone": "+91-9876543187",
    "assignedTruckId": null,
    "status": "inactive",
    "experienceYears": 16,
    "serviceHistory": [
      {
        "date": "2024-11-26",
        "description": "Tire replacement"
      },
      {
        "date": "2024-09-19",
        "description": "Brake inspection"
      },
      {
        "date": "2024-07-14",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D088",
    "name": "Manikandan Vasanth",
    "licenseNumber": "TN-26-989910",
    "phone": "+91-9876543188",
    "assignedTruckId": null,
    "status": "on-duty",
    "experienceYears": 20,
    "serviceHistory": [
      {
        "date": "2025-01-16",
        "description": "Engine tuning"
      }
    ]
  },
  {
    "id": "D089",
    "name": "Vasanth Murugan",
    "licenseNumber": "TN-25-616780",
    "phone": "+91-9876543189",
    "assignedTruckId": null,
    "status": "active",
    "experienceYears": 19,
    "serviceHistory": [
      {
        "date": "2024-04-21",
        "description": "Brake inspection"
      },
      {
        "date": "2024-04-26",
        "description": "Brake inspection"
      },
      {
        "date": "2024-07-06",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D090",
    "name": "Deepak Balaji",
    "licenseNumber": "TN-10-530208",
    "phone": "+91-9876543190",
    "assignedTruckId": null,
    "status": "inactive",
    "experienceYears": 9,
    "serviceHistory": [
      {
        "date": "2024-07-26",
        "description": "Brake inspection"
      },
      {
        "date": "2025-01-10",
        "description": "Engine tuning"
      },
      {
        "date": "2025-03-24",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D091",
    "name": "Sibi Vignesh",
    "licenseNumber": "TN-22-729646",
    "phone": "+91-9876543191",
    "assignedTruckId": null,
    "status": "off-duty",
    "experienceYears": 3,
    "serviceHistory": [
      {
        "date": "2024-11-02",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D092",
    "name": "Dinesh Vimal",
    "licenseNumber": "TN-56-540587",
    "phone": "+91-9876543192",
    "assignedTruckId": null,
    "status": "active",
    "experienceYears": 6,
    "serviceHistory": [
      {
        "date": "2025-01-21",
        "description": "Brake inspection"
      }
    ]
  },
  {
    "id": "D093",
    "name": "Murugan Senthil",
    "licenseNumber": "TN-37-216305",
    "phone": "+91-9876543193",
    "assignedTruckId": null,
    "status": "on-duty",
    "experienceYears": 15,
    "serviceHistory": [
      {
        "date": "2024-07-19",
        "description": "Oil change"
      },
      {
        "date": "2024-09-13",
        "description": "Brake inspection"
      },
      {
        "date": "2025-01-22",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D094",
    "name": "Manikandan Jeeva",
    "licenseNumber": "TN-39-640585",
    "phone": "+91-9876543194",
    "assignedTruckId": null,
    "status": "inactive",
    "experienceYears": 15,
    "serviceHistory": [
      {
        "date": "2025-02-14",
        "description": "Brake inspection"
      },
      {
        "date": "2024-07-01",
        "description": "Oil change"
      },
      {
        "date": "2025-01-25",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D095",
    "name": "Sathish Naveen",
    "licenseNumber": "TN-87-118204",
    "phone": "+91-9876543195",
    "assignedTruckId": null,
    "status": "active",
    "experienceYears": 13,
    "serviceHistory": [
      {
        "date": "2025-01-22",
        "description": "Oil change"
      },
      {
        "date": "2024-11-03",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D096",
    "name": "Saravanan Dinesh",
    "licenseNumber": "TN-91-387096",
    "phone": "+91-9876543196",
    "assignedTruckId": null,
    "status": "off-duty",
    "experienceYears": 9,
    "serviceHistory": [
      {
        "date": "2024-05-14",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D097",
    "name": "Saravanan Naveen",
    "licenseNumber": "TN-94-367083",
    "phone": "+91-9876543197",
    "assignedTruckId": null,
    "status": "on-duty",
    "experienceYears": 2,
    "serviceHistory": [
      {
        "date": "2025-02-28",
        "description": "Oil change"
      }
    ]
  },
  {
    "id": "D098",
    "name": "Parthiban Ragul",
    "licenseNumber": "TN-72-203823",
    "phone": "+91-9876543198",
    "assignedTruckId": null,
    "status": "on-duty",
    "experienceYears": 5,
    "serviceHistory": [
      {
        "date": "2024-08-18",
        "description": "Brake inspection"
      },
      {
        "date": "2024-09-07",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D099",
    "name": "Sundar Ram",
    "licenseNumber": "TN-17-259401",
    "phone": "+91-9876543199",
    "assignedTruckId": null,
    "status": "off-duty",
    "experienceYears": 3,
    "serviceHistory": [
      {
        "date": "2024-08-22",
        "description": "Engine tuning"
      },
      {
        "date": "2024-10-19",
        "description": "Brake inspection"
      },
      {
        "date": "2024-10-08",
        "description": "Tire replacement"
      }
    ]
  },
  {
    "id": "D100",
    "name": "Mohan Surya",
    "licenseNumber": "TN-82-272866",
    "phone": "+91-9876543200",
    "assignedTruckId": null,
    "status": "inactive",
    "experienceYears": 11,
    "serviceHistory": [
      {
        "date": "2024-11-15",
        "description": "Engine tuning"
      }
    ]
  }
];

const trucks = [
  {
    "id": "T001",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-11-8177",
    "capacityTons": 27.33,
    "driverId": "D001",
    "status": "idle",
    "location": {
      "lat": 9.837794,
      "lng": 78.615998
    },
    "loadDetails": [
      {
        "cargoType": "Electronics",
        "weight": 9.99,
        "from": "Salem",
        "to": "Tirunelveli",
        "deliveryDate": "2024-05-05"
      },
      {
        "cargoType": "Fruits",
        "weight": 4.85,
        "from": "Nagercoil",
        "to": "Chennai",
        "deliveryDate": "2025-01-31"
      }
    ]
  },
  {
    "id": "T002",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-61-1751",
    "capacityTons": 26.95,
    "driverId": "D002",
    "status": "maintenance",
    "location": {
      "lat": 10.897715,
      "lng": 78.292062
    },
    "loadDetails": [
      {
        "cargoType": "Electronics",
        "weight": 5.37,
        "from": "Chennai",
        "to": "Nagercoil",
        "deliveryDate": "2025-04-09"
      },
      {
        "cargoType": "Electronics",
        "weight": 8.35,
        "from": "Nagercoil",
        "to": "Salem",
        "deliveryDate": "2024-08-29"
      },
      {
        "cargoType": "Textiles",
        "weight": 6.74,
        "from": "Tiruchirapalli",
        "to": "Madurai",
        "deliveryDate": "2024-07-14"
      }
    ]
  },
  {
    "id": "T003",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-89-5623",
    "capacityTons": 16.13,
    "driverId": "D003",
    "status": "maintenance",
    "location": {
      "lat": 11.983439,
      "lng": 78.815141
    },
    "loadDetails": [
      {
        "cargoType": "Steel",
        "weight": 6.09,
        "from": "Salem",
        "to": "Chennai",
        "deliveryDate": "2025-03-06"
      },
      {
        "cargoType": "Textiles",
        "weight": 8.0,
        "from": "Thoothukudi",
        "to": "Chennai",
        "deliveryDate": "2024-07-01"
      },
      {
        "cargoType": "Electronics",
        "weight": 3.79,
        "from": "Nagercoil",
        "to": "Madurai",
        "deliveryDate": "2025-02-05"
      }
    ]
  },
  {
    "id": "T004",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-91-4338",
    "capacityTons": 19.68,
    "driverId": "D004",
    "status": "loading",
    "location": {
      "lat": 10.936417,
      "lng": 77.820059
    },
    "loadDetails": [
      {
        "cargoType": "Vegetables",
        "weight": 8.68,
        "from": "Chennai",
        "to": "Nagercoil",
        "deliveryDate": "2024-05-20"
      },
      {
        "cargoType": "Steel",
        "weight": 3.67,
        "from": "Erode",
        "to": "Thoothukudi",
        "deliveryDate": "2024-04-15"
      }
    ]
  },
  {
    "id": "T005",
    "model": "Eicher Pro",
    "licensePlate": "TN-65-9581",
    "capacityTons": 15.03,
    "driverId": "D005",
    "status": "maintenance",
    "location": {
      "lat": 12.475569,
      "lng": 79.76017
    },
    "loadDetails": [
      {
        "cargoType": "Textiles",
        "weight": 8.19,
        "from": "Nagercoil",
        "to": "Vellore",
        "deliveryDate": "2025-02-20"
      },
      {
        "cargoType": "Fruits",
        "weight": 2.12,
        "from": "Chennai",
        "to": "Nagercoil",
        "deliveryDate": "2024-09-20"
      },
      {
        "cargoType": "Cement",
        "weight": 4.73,
        "from": "Coimbatore",
        "to": "Vellore",
        "deliveryDate": "2024-07-02"
      }
    ]
  },
  {
    "id": "T006",
    "model": "Eicher Pro",
    "licensePlate": "TN-92-3636",
    "capacityTons": 29.99,
    "driverId": "D006",
    "status": "maintenance",
    "location": {
      "lat": 11.130215,
      "lng": 78.10951
    },
    "loadDetails": [
      {
        "cargoType": "Cement",
        "weight": 6.13,
        "from": "Tirunelveli",
        "to": "Vellore",
        "deliveryDate": "2024-09-22"
      }
    ]
  },
  {
    "id": "T007",
    "model": "Volvo FH16",
    "licensePlate": "TN-80-9529",
    "capacityTons": 11.2,
    "driverId": "D007",
    "status": "en-route",
    "location": {
      "lat": 8.397465,
      "lng": 76.105583
    },
    "loadDetails": [
      {
        "cargoType": "Fruits",
        "weight": 6.64,
        "from": "Tiruchirapalli",
        "to": "Chennai",
        "deliveryDate": "2024-07-11"
      },
      {
        "cargoType": "Electronics",
        "weight": 9.92,
        "from": "Erode",
        "to": "Erode",
        "deliveryDate": "2024-07-06"
      },
      {
        "cargoType": "Textiles",
        "weight": 9.02,
        "from": "Madurai",
        "to": "Tirunelveli",
        "deliveryDate": "2024-09-15"
      }
    ]
  },
  {
    "id": "T008",
    "model": "Tata Prima",
    "licensePlate": "TN-46-1095",
    "capacityTons": 14.15,
    "driverId": "D008",
    "status": "loading",
    "location": {
      "lat": 10.081371,
      "lng": 79.144126
    },
    "loadDetails": [
      {
        "cargoType": "Electronics",
        "weight": 4.85,
        "from": "Tiruchirapalli",
        "to": "Chennai",
        "deliveryDate": "2024-06-28"
      },
      {
        "cargoType": "Electronics",
        "weight": 3.51,
        "from": "Thoothukudi",
        "to": "Madurai",
        "deliveryDate": "2024-10-29"
      },
      {
        "cargoType": "Vegetables",
        "weight": 8.91,
        "from": "Salem",
        "to": "Coimbatore",
        "deliveryDate": "2025-04-09"
      }
    ]
  },
  {
    "id": "T009",
    "model": "Volvo FH16",
    "licensePlate": "TN-85-7721",
    "capacityTons": 15.79,
    "driverId": "D009",
    "status": "maintenance",
    "location": {
      "lat": 9.108445,
      "lng": 79.598628
    },
    "loadDetails": [
      {
        "cargoType": "Textiles",
        "weight": 9.53,
        "from": "Salem",
        "to": "Erode",
        "deliveryDate": "2024-12-21"
      },
      {
        "cargoType": "Vegetables",
        "weight": 6.46,
        "from": "Erode",
        "to": "Tirunelveli",
        "deliveryDate": "2025-02-07"
      }
    ]
  },
  {
    "id": "T010",
    "model": "Eicher Pro",
    "licensePlate": "TN-28-9525",
    "capacityTons": 27.11,
    "driverId": "D010",
    "status": "maintenance",
    "location": {
      "lat": 13.439327,
      "lng": 79.158621
    },
    "loadDetails": [
      {
        "cargoType": "Steel",
        "weight": 9.25,
        "from": "Chennai",
        "to": "Salem",
        "deliveryDate": "2025-02-07"
      },
      {
        "cargoType": "Electronics",
        "weight": 4.35,
        "from": "Chennai",
        "to": "Tiruchirapalli",
        "deliveryDate": "2024-12-21"
      },
      {
        "cargoType": "Cement",
        "weight": 5.48,
        "from": "Thoothukudi",
        "to": "Madurai",
        "deliveryDate": "2024-04-20"
      }
    ]
  },
  {
    "id": "T011",
    "model": "Eicher Pro",
    "licensePlate": "TN-69-1567",
    "capacityTons": 19.94,
    "driverId": "D011",
    "status": "idle",
    "location": {
      "lat": 8.194487,
      "lng": 78.80039
    },
    "loadDetails": [
      {
        "cargoType": "Steel",
        "weight": 3.8,
        "from": "Madurai",
        "to": "Vellore",
        "deliveryDate": "2025-04-07"
      },
      {
        "cargoType": "Vegetables",
        "weight": 10.0,
        "from": "Nagercoil",
        "to": "Thoothukudi",
        "deliveryDate": "2024-11-16"
      },
      {
        "cargoType": "Cement",
        "weight": 3.54,
        "from": "Erode",
        "to": "Thoothukudi",
        "deliveryDate": "2025-02-11"
      }
    ]
  },
  {
    "id": "T012",
    "model": "Tata Prima",
    "licensePlate": "TN-61-2709",
    "capacityTons": 28.97,
    "driverId": "D012",
    "status": "loading",
    "location": {
      "lat": 11.880257,
      "lng": 77.815619
    },
    "loadDetails": [
      {
        "cargoType": "Electronics",
        "weight": 9.7,
        "from": "Chennai",
        "to": "Madurai",
        "deliveryDate": "2024-07-18"
      },
      {
        "cargoType": "Vegetables",
        "weight": 8.66,
        "from": "Nagercoil",
        "to": "Salem",
        "deliveryDate": "2024-12-11"
      }
    ]
  },
  {
    "id": "T013",
    "model": "Tata Prima",
    "licensePlate": "TN-22-5904",
    "capacityTons": 21.72,
    "driverId": "D013",
    "status": "en-route",
    "location": {
      "lat": 9.118612,
      "lng": 78.113359
    },
    "loadDetails": [
      {
        "cargoType": "Electronics",
        "weight": 2.1,
        "from": "Thoothukudi",
        "to": "Thoothukudi",
        "deliveryDate": "2025-01-26"
      },
      {
        "cargoType": "Textiles",
        "weight": 7.53,
        "from": "Chennai",
        "to": "Tirunelveli",
        "deliveryDate": "2025-02-12"
      },
      {
        "cargoType": "Fruits",
        "weight": 8.62,
        "from": "Coimbatore",
        "to": "Coimbatore",
        "deliveryDate": "2024-10-03"
      }
    ]
  },
  {
    "id": "T014",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-99-8611",
    "capacityTons": 19.65,
    "driverId": "D014",
    "status": "idle",
    "location": {
      "lat": 10.084392,
      "lng": 76.200172
    },
    "loadDetails": [
      {
        "cargoType": "Electronics",
        "weight": 3.22,
        "from": "Tiruchirapalli",
        "to": "Tiruchirapalli",
        "deliveryDate": "2024-09-30"
      }
    ]
  },
  {
    "id": "T015",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-76-1444",
    "capacityTons": 25.37,
    "driverId": "D015",
    "status": "maintenance",
    "location": {
      "lat": 12.829479,
      "lng": 79.06964
    },
    "loadDetails": [
      {
        "cargoType": "Steel",
        "weight": 2.53,
        "from": "Madurai",
        "to": "Chennai",
        "deliveryDate": "2024-05-12"
      },
      {
        "cargoType": "Cement",
        "weight": 3.37,
        "from": "Nagercoil",
        "to": "Salem",
        "deliveryDate": "2024-08-25"
      }
    ]
  },
  {
    "id": "T016",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-21-5135",
    "capacityTons": 10.72,
    "driverId": "D016",
    "status": "maintenance",
    "location": {
      "lat": 11.288781,
      "lng": 77.612947
    },
    "loadDetails": [
      {
        "cargoType": "Vegetables",
        "weight": 9.63,
        "from": "Erode",
        "to": "Coimbatore",
        "deliveryDate": "2024-04-20"
      },
      {
        "cargoType": "Steel",
        "weight": 4.74,
        "from": "Tirunelveli",
        "to": "Vellore",
        "deliveryDate": "2024-09-10"
      },
      {
        "cargoType": "Vegetables",
        "weight": 9.84,
        "from": "Tirunelveli",
        "to": "Coimbatore",
        "deliveryDate": "2024-06-14"
      }
    ]
  },
  {
    "id": "T017",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-15-4156",
    "capacityTons": 19.4,
    "driverId": "D017",
    "status": "loading",
    "location": {
      "lat": 12.437899,
      "lng": 77.357412
    },
    "loadDetails": [
      {
        "cargoType": "Cement",
        "weight": 2.33,
        "from": "Madurai",
        "to": "Tiruchirapalli",
        "deliveryDate": "2024-05-31"
      },
      {
        "cargoType": "Electronics",
        "weight": 4.97,
        "from": "Madurai",
        "to": "Chennai",
        "deliveryDate": "2024-04-16"
      },
      {
        "cargoType": "Fruits",
        "weight": 3.86,
        "from": "Thoothukudi",
        "to": "Vellore",
        "deliveryDate": "2024-08-24"
      }
    ]
  },
  {
    "id": "T018",
    "model": "Tata Prima",
    "licensePlate": "TN-62-6964",
    "capacityTons": 18.82,
    "driverId": "D018",
    "status": "en-route",
    "location": {
      "lat": 13.386664,
      "lng": 77.748605
    },
    "loadDetails": [
      {
        "cargoType": "Cement",
        "weight": 5.44,
        "from": "Coimbatore",
        "to": "Coimbatore",
        "deliveryDate": "2024-09-03"
      },
      {
        "cargoType": "Vegetables",
        "weight": 9.44,
        "from": "Vellore",
        "to": "Madurai",
        "deliveryDate": "2025-01-05"
      },
      {
        "cargoType": "Electronics",
        "weight": 4.14,
        "from": "Erode",
        "to": "Chennai",
        "deliveryDate": "2024-09-14"
      }
    ]
  },
  {
    "id": "T019",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-99-4079",
    "capacityTons": 21.8,
    "driverId": "D019",
    "status": "idle",
    "location": {
      "lat": 10.043327,
      "lng": 77.182764
    },
    "loadDetails": [
      {
        "cargoType": "Electronics",
        "weight": 9.84,
        "from": "Erode",
        "to": "Tiruchirapalli",
        "deliveryDate": "2025-02-17"
      },
      {
        "cargoType": "Steel",
        "weight": 7.82,
        "from": "Vellore",
        "to": "Nagercoil",
        "deliveryDate": "2024-09-19"
      },
      {
        "cargoType": "Vegetables",
        "weight": 6.26,
        "from": "Tirunelveli",
        "to": "Tiruchirapalli",
        "deliveryDate": "2024-07-18"
      }
    ]
  },
  {
    "id": "T020",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-73-4540",
    "capacityTons": 27.41,
    "driverId": "D020",
    "status": "en-route",
    "location": {
      "lat": 8.009374,
      "lng": 76.797457
    },
    "loadDetails": [
      {
        "cargoType": "Electronics",
        "weight": 8.46,
        "from": "Nagercoil",
        "to": "Erode",
        "deliveryDate": "2024-10-24"
      },
      {
        "cargoType": "Fruits",
        "weight": 4.99,
        "from": "Nagercoil",
        "to": "Tirunelveli",
        "deliveryDate": "2024-04-16"
      },
      {
        "cargoType": "Cement",
        "weight": 3.7,
        "from": "Thoothukudi",
        "to": "Thoothukudi",
        "deliveryDate": "2024-11-23"
      }
    ]
  },
  {
    "id": "T021",
    "model": "Tata Prima",
    "licensePlate": "TN-20-8906",
    "capacityTons": 13.2,
    "driverId": "D021",
    "status": "maintenance",
    "location": {
      "lat": 10.304396,
      "lng": 76.543118
    },
    "loadDetails": [
      {
        "cargoType": "Vegetables",
        "weight": 3.16,
        "from": "Thoothukudi",
        "to": "Erode",
        "deliveryDate": "2024-08-18"
      }
    ]
  },
  {
    "id": "T022",
    "model": "Volvo FH16",
    "licensePlate": "TN-88-4720",
    "capacityTons": 18.76,
    "driverId": "D022",
    "status": "maintenance",
    "location": {
      "lat": 11.71901,
      "lng": 79.737822
    },
    "loadDetails": [
      {
        "cargoType": "Textiles",
        "weight": 3.81,
        "from": "Vellore",
        "to": "Chennai",
        "deliveryDate": "2024-04-26"
      },
      {
        "cargoType": "Steel",
        "weight": 5.4,
        "from": "Vellore",
        "to": "Nagercoil",
        "deliveryDate": "2024-05-23"
      },
      {
        "cargoType": "Fruits",
        "weight": 6.58,
        "from": "Thoothukudi",
        "to": "Chennai",
        "deliveryDate": "2024-10-10"
      }
    ]
  },
  {
    "id": "T023",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-21-3175",
    "capacityTons": 21.42,
    "driverId": "D023",
    "status": "loading",
    "location": {
      "lat": 10.690673,
      "lng": 79.594051
    },
    "loadDetails": [
      {
        "cargoType": "Textiles",
        "weight": 7.82,
        "from": "Coimbatore",
        "to": "Nagercoil",
        "deliveryDate": "2025-01-11"
      },
      {
        "cargoType": "Vegetables",
        "weight": 8.93,
        "from": "Erode",
        "to": "Tirunelveli",
        "deliveryDate": "2024-07-10"
      },
      {
        "cargoType": "Textiles",
        "weight": 6.27,
        "from": "Erode",
        "to": "Erode",
        "deliveryDate": "2024-08-30"
      }
    ]
  },
  {
    "id": "T024",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-17-4234",
    "capacityTons": 12.82,
    "driverId": "D024",
    "status": "idle",
    "location": {
      "lat": 10.927585,
      "lng": 79.794151
    },
    "loadDetails": [
      {
        "cargoType": "Electronics",
        "weight": 9.9,
        "from": "Chennai",
        "to": "Nagercoil",
        "deliveryDate": "2025-01-22"
      },
      {
        "cargoType": "Electronics",
        "weight": 8.91,
        "from": "Tirunelveli",
        "to": "Salem",
        "deliveryDate": "2025-02-13"
      },
      {
        "cargoType": "Textiles",
        "weight": 9.08,
        "from": "Chennai",
        "to": "Nagercoil",
        "deliveryDate": "2024-08-30"
      }
    ]
  },
  {
    "id": "T025",
    "model": "Volvo FH16",
    "licensePlate": "TN-83-4894",
    "capacityTons": 29.74,
    "driverId": "D025",
    "status": "idle",
    "location": {
      "lat": 8.850368,
      "lng": 77.142673
    },
    "loadDetails": [
      {
        "cargoType": "Cement",
        "weight": 8.3,
        "from": "Tiruchirapalli",
        "to": "Tirunelveli",
        "deliveryDate": "2024-10-28"
      },
      {
        "cargoType": "Vegetables",
        "weight": 3.84,
        "from": "Madurai",
        "to": "Thoothukudi",
        "deliveryDate": "2024-12-14"
      }
    ]
  },
  {
    "id": "T026",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-76-1241",
    "capacityTons": 16.51,
    "driverId": "D026",
    "status": "en-route",
    "location": {
      "lat": 10.694009,
      "lng": 79.948662
    },
    "loadDetails": [
      {
        "cargoType": "Cement",
        "weight": 7.71,
        "from": "Chennai",
        "to": "Madurai",
        "deliveryDate": "2024-12-20"
      },
      {
        "cargoType": "Electronics",
        "weight": 7.09,
        "from": "Erode",
        "to": "Chennai",
        "deliveryDate": "2024-10-11"
      }
    ]
  },
  {
    "id": "T027",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-10-9005",
    "capacityTons": 16.39,
    "driverId": "D027",
    "status": "loading",
    "location": {
      "lat": 11.293449,
      "lng": 76.352142
    },
    "loadDetails": [
      {
        "cargoType": "Fruits",
        "weight": 5.44,
        "from": "Tirunelveli",
        "to": "Thoothukudi",
        "deliveryDate": "2024-05-02"
      },
      {
        "cargoType": "Electronics",
        "weight": 8.26,
        "from": "Erode",
        "to": "Tirunelveli",
        "deliveryDate": "2024-08-12"
      },
      {
        "cargoType": "Electronics",
        "weight": 4.0,
        "from": "Tiruchirapalli",
        "to": "Tiruchirapalli",
        "deliveryDate": "2024-05-09"
      }
    ]
  },
  {
    "id": "T028",
    "model": "Volvo FH16",
    "licensePlate": "TN-47-3162",
    "capacityTons": 19.4,
    "driverId": "D028",
    "status": "idle",
    "location": {
      "lat": 11.326994,
      "lng": 78.183597
    },
    "loadDetails": [
      {
        "cargoType": "Steel",
        "weight": 3.71,
        "from": "Tirunelveli",
        "to": "Erode",
        "deliveryDate": "2024-08-18"
      },
      {
        "cargoType": "Textiles",
        "weight": 2.55,
        "from": "Vellore",
        "to": "Erode",
        "deliveryDate": "2024-06-02"
      },
      {
        "cargoType": "Vegetables",
        "weight": 2.36,
        "from": "Nagercoil",
        "to": "Thoothukudi",
        "deliveryDate": "2024-06-01"
      }
    ]
  },
  {
    "id": "T029",
    "model": "Eicher Pro",
    "licensePlate": "TN-51-2014",
    "capacityTons": 18.38,
    "driverId": "D029",
    "status": "idle",
    "location": {
      "lat": 12.285347,
      "lng": 80.297126
    },
    "loadDetails": [
      {
        "cargoType": "Fruits",
        "weight": 8.9,
        "from": "Vellore",
        "to": "Tiruchirapalli",
        "deliveryDate": "2024-08-29"
      },
      {
        "cargoType": "Vegetables",
        "weight": 9.44,
        "from": "Nagercoil",
        "to": "Tiruchirapalli",
        "deliveryDate": "2024-07-14"
      }
    ]
  },
  {
    "id": "T030",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-91-3165",
    "capacityTons": 18.2,
    "driverId": "D030",
    "status": "loading",
    "location": {
      "lat": 12.53597,
      "lng": 76.073595
    },
    "loadDetails": [
      {
        "cargoType": "Steel",
        "weight": 4.13,
        "from": "Nagercoil",
        "to": "Salem",
        "deliveryDate": "2024-06-08"
      },
      {
        "cargoType": "Fruits",
        "weight": 4.73,
        "from": "Chennai",
        "to": "Vellore",
        "deliveryDate": "2024-12-21"
      }
    ]
  },
  {
    "id": "T031",
    "model": "Eicher Pro",
    "licensePlate": "TN-42-3799",
    "capacityTons": 15.8,
    "driverId": "D031",
    "status": "loading",
    "location": {
      "lat": 13.302633,
      "lng": 78.008518
    },
    "loadDetails": [
      {
        "cargoType": "Steel",
        "weight": 3.12,
        "from": "Coimbatore",
        "to": "Erode",
        "deliveryDate": "2024-07-24"
      },
      {
        "cargoType": "Steel",
        "weight": 4.01,
        "from": "Tirunelveli",
        "to": "Tiruchirapalli",
        "deliveryDate": "2024-07-05"
      },
      {
        "cargoType": "Electronics",
        "weight": 3.36,
        "from": "Salem",
        "to": "Vellore",
        "deliveryDate": "2024-05-13"
      }
    ]
  },
  {
    "id": "T032",
    "model": "Eicher Pro",
    "licensePlate": "TN-72-8360",
    "capacityTons": 17.82,
    "driverId": "D032",
    "status": "idle",
    "location": {
      "lat": 13.226941,
      "lng": 79.525958
    },
    "loadDetails": [
      {
        "cargoType": "Vegetables",
        "weight": 4.81,
        "from": "Madurai",
        "to": "Erode",
        "deliveryDate": "2024-11-23"
      }
    ]
  },
  {
    "id": "T033",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-78-8668",
    "capacityTons": 25.46,
    "driverId": "D033",
    "status": "en-route",
    "location": {
      "lat": 10.988755,
      "lng": 77.937879
    },
    "loadDetails": [
      {
        "cargoType": "Cement",
        "weight": 5.49,
        "from": "Tirunelveli",
        "to": "Nagercoil",
        "deliveryDate": "2024-06-12"
      }
    ]
  },
  {
    "id": "T034",
    "model": "Tata Prima",
    "licensePlate": "TN-33-5977",
    "capacityTons": 13.29,
    "driverId": "D034",
    "status": "en-route",
    "location": {
      "lat": 8.267479,
      "lng": 78.601806
    },
    "loadDetails": [
      {
        "cargoType": "Fruits",
        "weight": 9.92,
        "from": "Salem",
        "to": "Coimbatore",
        "deliveryDate": "2025-02-17"
      },
      {
        "cargoType": "Electronics",
        "weight": 2.56,
        "from": "Erode",
        "to": "Madurai",
        "deliveryDate": "2024-08-04"
      },
      {
        "cargoType": "Cement",
        "weight": 3.94,
        "from": "Madurai",
        "to": "Vellore",
        "deliveryDate": "2024-08-09"
      }
    ]
  },
  {
    "id": "T035",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-80-5642",
    "capacityTons": 23.27,
    "driverId": "D035",
    "status": "loading",
    "location": {
      "lat": 9.824334,
      "lng": 79.910773
    },
    "loadDetails": [
      {
        "cargoType": "Steel",
        "weight": 9.11,
        "from": "Tirunelveli",
        "to": "Thoothukudi",
        "deliveryDate": "2024-07-24"
      }
    ]
  },
  {
    "id": "T036",
    "model": "Tata Prima",
    "licensePlate": "TN-37-2744",
    "capacityTons": 10.19,
    "driverId": "D036",
    "status": "en-route",
    "location": {
      "lat": 8.418401,
      "lng": 79.60107
    },
    "loadDetails": [
      {
        "cargoType": "Electronics",
        "weight": 9.86,
        "from": "Coimbatore",
        "to": "Erode",
        "deliveryDate": "2024-12-02"
      }
    ]
  },
  {
    "id": "T037",
    "model": "Eicher Pro",
    "licensePlate": "TN-67-1203",
    "capacityTons": 26.75,
    "driverId": "D037",
    "status": "maintenance",
    "location": {
      "lat": 12.431467,
      "lng": 78.438393
    },
    "loadDetails": [
      {
        "cargoType": "Steel",
        "weight": 5.81,
        "from": "Erode",
        "to": "Chennai",
        "deliveryDate": "2024-12-23"
      },
      {
        "cargoType": "Electronics",
        "weight": 4.16,
        "from": "Madurai",
        "to": "Salem",
        "deliveryDate": "2025-01-04"
      }
    ]
  },
  {
    "id": "T038",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-41-4761",
    "capacityTons": 18.66,
    "driverId": "D038",
    "status": "en-route",
    "location": {
      "lat": 8.032344,
      "lng": 77.912981
    },
    "loadDetails": [
      {
        "cargoType": "Vegetables",
        "weight": 8.19,
        "from": "Thoothukudi",
        "to": "Salem",
        "deliveryDate": "2025-02-01"
      }
    ]
  },
  {
    "id": "T039",
    "model": "Volvo FH16",
    "licensePlate": "TN-38-7953",
    "capacityTons": 29.14,
    "driverId": "D039",
    "status": "loading",
    "location": {
      "lat": 11.391151,
      "lng": 76.109855
    },
    "loadDetails": [
      {
        "cargoType": "Textiles",
        "weight": 8.01,
        "from": "Chennai",
        "to": "Tirunelveli",
        "deliveryDate": "2024-05-24"
      },
      {
        "cargoType": "Vegetables",
        "weight": 9.48,
        "from": "Thoothukudi",
        "to": "Salem",
        "deliveryDate": "2024-06-15"
      }
    ]
  },
  {
    "id": "T040",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-69-1583",
    "capacityTons": 13.27,
    "driverId": "D040",
    "status": "idle",
    "location": {
      "lat": 9.889461,
      "lng": 78.189049
    },
    "loadDetails": [
      {
        "cargoType": "Cement",
        "weight": 5.71,
        "from": "Thoothukudi",
        "to": "Coimbatore",
        "deliveryDate": "2024-10-27"
      },
      {
        "cargoType": "Vegetables",
        "weight": 5.65,
        "from": "Tiruchirapalli",
        "to": "Erode",
        "deliveryDate": "2024-06-16"
      },
      {
        "cargoType": "Vegetables",
        "weight": 3.91,
        "from": "Chennai",
        "to": "Vellore",
        "deliveryDate": "2024-11-11"
      }
    ]
  },
  {
    "id": "T041",
    "model": "Tata Prima",
    "licensePlate": "TN-21-4311",
    "capacityTons": 22.14,
    "driverId": "D041",
    "status": "idle",
    "location": {
      "lat": 10.232102,
      "lng": 77.607499
    },
    "loadDetails": [
      {
        "cargoType": "Textiles",
        "weight": 8.91,
        "from": "Vellore",
        "to": "Nagercoil",
        "deliveryDate": "2024-07-08"
      },
      {
        "cargoType": "Fruits",
        "weight": 7.77,
        "from": "Chennai",
        "to": "Chennai",
        "deliveryDate": "2024-11-21"
      },
      {
        "cargoType": "Steel",
        "weight": 7.51,
        "from": "Tiruchirapalli",
        "to": "Madurai",
        "deliveryDate": "2025-01-01"
      }
    ]
  },
  {
    "id": "T042",
    "model": "Tata Prima",
    "licensePlate": "TN-44-1211",
    "capacityTons": 29.52,
    "driverId": "D042",
    "status": "maintenance",
    "location": {
      "lat": 10.905414,
      "lng": 77.721271
    },
    "loadDetails": [
      {
        "cargoType": "Textiles",
        "weight": 2.27,
        "from": "Vellore",
        "to": "Tiruchirapalli",
        "deliveryDate": "2025-04-06"
      },
      {
        "cargoType": "Steel",
        "weight": 3.79,
        "from": "Coimbatore",
        "to": "Erode",
        "deliveryDate": "2024-07-23"
      }
    ]
  },
  {
    "id": "T043",
    "model": "Eicher Pro",
    "licensePlate": "TN-74-7407",
    "capacityTons": 20.35,
    "driverId": "D043",
    "status": "maintenance",
    "location": {
      "lat": 12.57107,
      "lng": 78.239662
    },
    "loadDetails": [
      {
        "cargoType": "Electronics",
        "weight": 5.59,
        "from": "Vellore",
        "to": "Nagercoil",
        "deliveryDate": "2024-09-16"
      },
      {
        "cargoType": "Fruits",
        "weight": 8.87,
        "from": "Tirunelveli",
        "to": "Tiruchirapalli",
        "deliveryDate": "2024-06-20"
      },
      {
        "cargoType": "Electronics",
        "weight": 6.0,
        "from": "Erode",
        "to": "Vellore",
        "deliveryDate": "2024-10-17"
      }
    ]
  },
  {
    "id": "T044",
    "model": "Tata Prima",
    "licensePlate": "TN-77-8583",
    "capacityTons": 13.24,
    "driverId": "D044",
    "status": "en-route",
    "location": {
      "lat": 8.626843,
      "lng": 80.150217
    },
    "loadDetails": [
      {
        "cargoType": "Cement",
        "weight": 7.81,
        "from": "Erode",
        "to": "Thoothukudi",
        "deliveryDate": "2024-05-17"
      },
      {
        "cargoType": "Electronics",
        "weight": 2.33,
        "from": "Thoothukudi",
        "to": "Chennai",
        "deliveryDate": "2024-12-11"
      }
    ]
  },
  {
    "id": "T045",
    "model": "Tata Prima",
    "licensePlate": "TN-62-4275",
    "capacityTons": 16.32,
    "driverId": "D045",
    "status": "en-route",
    "location": {
      "lat": 9.825147,
      "lng": 77.653288
    },
    "loadDetails": [
      {
        "cargoType": "Steel",
        "weight": 4.46,
        "from": "Chennai",
        "to": "Erode",
        "deliveryDate": "2024-12-03"
      },
      {
        "cargoType": "Fruits",
        "weight": 7.9,
        "from": "Salem",
        "to": "Chennai",
        "deliveryDate": "2025-02-24"
      },
      {
        "cargoType": "Electronics",
        "weight": 2.81,
        "from": "Coimbatore",
        "to": "Erode",
        "deliveryDate": "2024-04-30"
      }
    ]
  },
  {
    "id": "T046",
    "model": "Ashok Leyland Boss",
    "licensePlate": "TN-37-4351",
    "capacityTons": 22.82,
    "driverId": "D046",
    "status": "en-route",
    "location": {
      "lat": 8.111782,
      "lng": 76.539158
    },
    "loadDetails": [
      {
        "cargoType": "Electronics",
        "weight": 9.49,
        "from": "Thoothukudi",
        "to": "Tiruchirapalli",
        "deliveryDate": "2024-08-30"
      },
      {
        "cargoType": "Electronics",
        "weight": 8.78,
        "from": "Vellore",
        "to": "Chennai",
        "deliveryDate": "2024-08-18"
      }
    ]
  },
  {
    "id": "T047",
    "model": "Eicher Pro",
    "licensePlate": "TN-29-9056",
    "capacityTons": 25.71,
    "driverId": "D047",
    "status": "idle",
    "location": {
      "lat": 9.838761,
      "lng": 76.553569
    },
    "loadDetails": [
      {
        "cargoType": "Textiles",
        "weight": 6.0,
        "from": "Tiruchirapalli",
        "to": "Coimbatore",
        "deliveryDate": "2025-02-24"
      },
      {
        "cargoType": "Steel",
        "weight": 9.51,
        "from": "Coimbatore",
        "to": "Erode",
        "deliveryDate": "2024-12-16"
      }
    ]
  },
  {
    "id": "T048",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-85-8276",
    "capacityTons": 29.77,
    "driverId": "D048",
    "status": "maintenance",
    "location": {
      "lat": 13.153404,
      "lng": 76.960727
    },
    "loadDetails": [
      {
        "cargoType": "Fruits",
        "weight": 7.66,
        "from": "Salem",
        "to": "Erode",
        "deliveryDate": "2024-09-06"
      },
      {
        "cargoType": "Cement",
        "weight": 7.54,
        "from": "Nagercoil",
        "to": "Salem",
        "deliveryDate": "2025-01-25"
      },
      {
        "cargoType": "Fruits",
        "weight": 7.11,
        "from": "Chennai",
        "to": "Tiruchirapalli",
        "deliveryDate": "2024-04-30"
      }
    ]
  },
  {
    "id": "T049",
    "model": "Tata Prima",
    "licensePlate": "TN-95-9349",
    "capacityTons": 12.43,
    "driverId": "D049",
    "status": "en-route",
    "location": {
      "lat": 13.340256,
      "lng": 78.477557
    },
    "loadDetails": [
      {
        "cargoType": "Cement",
        "weight": 2.24,
        "from": "Thoothukudi",
        "to": "Thoothukudi",
        "deliveryDate": "2024-09-13"
      },
      {
        "cargoType": "Vegetables",
        "weight": 3.93,
        "from": "Tiruchirapalli",
        "to": "Chennai",
        "deliveryDate": "2024-12-25"
      },
      {
        "cargoType": "Steel",
        "weight": 9.85,
        "from": "Thoothukudi",
        "to": "Vellore",
        "deliveryDate": "2025-01-12"
      }
    ]
  },
  {
    "id": "T050",
    "model": "BharatBenz 2523",
    "licensePlate": "TN-19-2732",
    "capacityTons": 14.34,
    "driverId": "D050",
    "status": "loading",
    "location": {
      "lat": 9.662703,
      "lng": 78.192847
    },
    "loadDetails": [
      {
        "cargoType": "Textiles",
        "weight": 7.09,
        "from": "Erode",
        "to": "Coimbatore",
        "deliveryDate": "2024-10-30"
      },
      {
        "cargoType": "Textiles",
        "weight": 7.82,
        "from": "Nagercoil",
        "to": "Salem",
        "deliveryDate": "2025-02-02"
      },
      {
        "cargoType": "Electronics",
        "weight": 4.45,
        "from": "Coimbatore",
        "to": "Madurai",
        "deliveryDate": "2024-09-29"
      }
    ]
  },
  {
    "id": "T051",
    "model": "Tata Prima",
    "licensePlate": "TN-65-4777",
    "capacityTons": 21.5,
    "driverId": "D051",
    "status": "maintenance",
    "location": {
      "lat": 8.495891,
      "lng": 80.268174
    },
    "loadDetails": [
      {
        "cargoType": "Steel",
        "weight": 5.21,
        "from": "Vellore",
        "to": "Coimbatore",
        "deliveryDate": "2024-07-02"
      }
    ]
  },
  {
    "id": "T052",
    "model": "Eicher Pro",
    "licensePlate": "TN-50-7121",
    "capacityTons": 10.3,
    "driverId": "D052",
    "status": "maintenance",
    "location": {
      "lat": 8.974329,
      "lng": 76.103741
    },
    "loadDetails": [
      {
        "cargoType": "Cement",
        "weight": 9.4,
        "from": "Coimbatore",
        "to": "Coimbatore",
        "deliveryDate": "2025-03-13"
      }
    ]
  },
  {
    "id": "T053",
    "model": "Tata Prima",
    "licensePlate": "TN-67-1793",
    "capacityTons": 12.39,
    "driverId": "D053",
    "status": "maintenance",
    "location": {
      "lat": 12.196583,
      "lng": 76.680845
    },
    "loadDetails": [
      {
        "cargoType": "Electronics",
        "weight": 8.55,
        "from": "Tiruchirapalli",
        "to": "Tirunelveli",
        "deliveryDate": "2024-08-17"
      },
      {
        "cargoType": "Fruits",
        "weight": 2.85,
        "from": "Vellore",
        "to": "Tirunelveli",
        "deliveryDate": "2024-06-23"
      }
    ]
  },
  {
    "id": "T054",
    "model": "Eicher Pro",
    "licensePlate": "TN-13-6657",
    "capacityTons": 12.26,
    "driverId": "D054",
    "status": "maintenance",
    "location": {
      "lat": 8.759597,
      "lng": 77.167684
    },
    "loadDetails": [
      {
        "cargoType": "Fruits",
        "weight": 5.08,
        "from": "Thoothukudi",
        "to": "Tiruchirapalli",
        "deliveryDate": "2024-06-13"
      }
    ]
  },
  {
    "id": "T055",
    "model": "Eicher Pro",
    "licensePlate": "TN-83-7482",
    "capacityTons": 12.04,
    "driverId": "D055",
    "status": "maintenance",
    "location": {
      "lat": 8.20108,
      "lng": 79.68695
    },
    "loadDetails": [
      {
        "cargoType": "Cement",
        "weight": 7.75,
        "from": "Thoothukudi",
        "to": "Nagercoil",
        "deliveryDate": "2025-04-04"
      },
      {
        "cargoType": "Fruits",
        "weight": 3.68,
        "from": "Madurai",
        "to": "Nagercoil",
        "deliveryDate": "2025-03-06"
      }
    ]
  },
  {
    "id": "T056",
    "model": "Volvo FH16",
    "licensePlate": "TN-29-9954",
    "capacityTons": 16.26,
    "driverId": "D056",
    "status": "maintenance",
    "location": {
      "lat": 11.604961,
      "lng": 78.560531
    },
    "loadDetails": [
      {
        "cargoType": "Fruits",
        "weight": 2.78,
        "from": "Nagercoil",
        "to": "Chennai",
        "deliveryDate": "2024-09-25"
      },
      {
        "cargoType": "Vegetables",
        "weight": 3.41,
        "from": "Thoothukudi",
        "to": "Tiruchirapalli",
        "deliveryDate": "2024-10-29"
      }
    ]
  },
  {
    "id": "T057",
    "model": "Mahindra Blazo",
    "licensePlate": "TN-53-6880",
    "capacityTons": 24.94,
    "driverId": "D057",
    "status": "maintenance",
    "location": {
      "lat": 8.448429,
      "lng": 76.759822
    },
    "loadDetails": [
      {
        "cargoType": "Steel",
        "weight": 8.87,
        "from": "Vellore",
        "to": "Salem",
        "deliveryDate": "2024-08-23"
      }
    ]
  },
  {
    "id": "T058",
    "model": "Volvo FH16",
    "licensePlate": "TN-19-9522",
    "capacityTons": 17.45,
    "driverId": "D058",
    "status": "idle",
    "location": {
      "lat": 10.48394,
      "lng": 79.433966
    },
    "loadDetails": [
      {
        "cargoType": "Electronics",
        "weight": 9.66,
        "from": "Tirunelveli",
        "to": "Thoothukudi",
        "deliveryDate": "2025-03-06"
      },
      {
        "cargoType": "Cement",
        "weight": 3.8,
        "from": "Erode",
        "to": "Salem",
        "deliveryDate": "2024-10-16"
      }
    ]
  },
  {
    "id": "T059",
    "model": "Volvo FH16",
    "licensePlate": "TN-33-6057",
    "capacityTons": 28.24,
    "driverId": "D059",
    "status": "idle",
    "location": {
      "lat": 13.360559,
      "lng": 79.736878
    },
    "loadDetails": [
      {
        "cargoType": "Fruits",
        "weight": 2.63,
        "from": "Nagercoil",
        "to": "Vellore",
        "deliveryDate": "2025-03-14"
      }
    ]
  },
  {
    "id": "T060",
    "model": "Volvo FH16",
    "licensePlate": "TN-42-5041",
    "capacityTons": 13.88,
    "driverId": "D060",
    "status": "en-route",
    "location": {
      "lat": 10.418581,
      "lng": 76.108438
    },
    "loadDetails": [
      {
        "cargoType": "Cement",
        "weight": 9.85,
        "from": "Coimbatore",
        "to": "Tiruchirapalli",
        "deliveryDate": "2024-09-13"
      }
    ]
  }
];

module.exports = { drivers, trucks };