define({ "api": [
  {
    "type": "get",
    "url": "/courses/update",
    "title": "",
    "description": "<p>拉取并更新教务处数据</p>",
    "name": "updateCourseInfoFromJWC",
    "group": "courses",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Cookies",
            "description": ""
          }
        ]
      }
    },
    "filename": "Code/backend/src/main/java/com/yoke/backend/Controller/CourseController.java",
    "groupTitle": "courses"
  }
] });
