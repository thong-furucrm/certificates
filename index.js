const data = {
    nodes: [
      {
        id: "A1",
        name: "USER EXPERIENCE . DESIGNER",
        className: "group1"
      },
      {
        id: "A2",
        name: "ASSOCIATE",
        className: "group2",
        mostPopular: true
      },
      {
        id: "A3",
        name: "AI ASSOCIATE",
        className: "group2"
      },
      {
        id: "A4",
        name: "ADMINISTRATOR",
        className: "group3",
        mostPopular: true
      },
      {
        id: "A5",
        name: "PLATFORM APP BUILDER",
        className: "group3",
        mostPopular: true
      },
      {
        id: "A6",
        name: "PLATFORM DEVELOPER 1",
        className: "group4"
      },
      {
        id: "A7",
        name: "MARKETING CLOUD . ADMIN",
        className: "group5"
      },
      {
        id: "A8",
        name: "ACCOUNT ENGAGEMENT . SPECIALIST",
        className: "group5"
      },
      {
        id: "B1",
        name: "STRATEGY DESIGNER",
        className: "group1"
      },
      {
        className: "none"
      },
      {
        className: "none"
      },
      {
        id: "B4",
        name: "CPQ SPECIALIST",
        className: "group3"
      },
      {
        id: "B5",
        name: "INDUSTRIES CPQ DEVELOPER",
        className: "group4"
      },
      {
        id: "B6",
        name: "PLATFORM DEVELOPER 2",
        className: "group4"
      },
      {
        id: "B7",
        name: "MARKETING CLOUD EMAIL . SPECIALIST",
        className: "group5"
      },
      {
        id: "B8",
        name: "ACCOUNT ENGAGEMENT . CONSULTANT",
        className: "group5"
      },
      {
        className: "none"
      },
      {
        id: "C2",
        name: "EDUCATION CLOUD . CONSULTANT",
        className: "group6"
      },
      {
        className: "none"
      },
      {
        id: "C4",
        name: "ADVANCED ADMIN",
        className: "group3"
      },
      {
        id: "C5",
        name: "OMNISTUDIO DEVELOPER",
        className: "group4"
      },
      {
        id: "C6",
        name: "JAVA SCRIPT DEVELOP 1",
        className: "group4"
      },
      {
        id: "C7",
        name: "MARKETING CLOUD . DEVELOPER",
        className: "group5"
      },
      {
        id: "C8",
        name: "MARKETING CLOUD . CONSULTANT",
        className: "group5"
      },
      {
        id: "D1",
        name: "TABLEAU CRM & EINSTEIN . DISCOVERY CONSULTANT",
        className: "group6"
      },
      {
        id: "D2",
        name: "SALES CLOUD CONSULTANT",
        className: "group6"
      },
      {
        className: "none"
      },
      {
        id: "D4",
        name: "BUSINESS ANALYST",
        className: "group3"
      },
      {
        className: "none"
      },
      {
        id: "D6",
        name: "B2C COMMERCE . DEVELOPER",
        className: "group4"
      },
      {
        className: "none"
      },
      {
        className: "none"
      },
      {
        id: "E1",
        name: "OMNISTUDIO CONSULTANT",
        className: "group6"
      },
      {
        id: "E2",
        name: "NON-PROFIT CLOUD . CONSULTANT",
        className: "group6"
      },
      {
        className: "none"
      },
      {
        id: "E4",
        name: "DATA ARCHITECT",
        className: "group7"
      },
      {
        id: "E5",
        name: "IDENTITY AND ACCESS . MANAGEMENT ARCHITECT",
        className: "group7"
      },
      {
        id: "E6",
        name: "HEROKU ARCHITECT",
        className: "group7"
      },
      {
        id: "E7",
        name: "B2C SOLUTION ARCHITECT",
        className: "group7"
      },
      {
        id: "E8",
        name: "INTEGRATION ARCHITECT",
        className: "group7"
      },
      {
        id: "F1",
        name: "FIELD SERVICE LIGHTNING . CONSULTANT",
        className: "group6"
      },
      {
        id: "F2",
        name: "SERVICE CLOUD CONSULTANT",
        className: "group6"
      },
      {
        className: "none"
      },
      {
        id: "F4",
        name: "SHARING AND VISIBILITY . ARCHITECT",
        className: "group7"
      },
      {
        id: "F5",
        name: "INTEGRATION ARCHITECT",
        className: "group7"
      },
      {
        id: "F6",
        name: "B2C COMMERCE ARCHITECT",
        className: "group7"
      },
      {
        className: "none"
      },
      {
        id: "F8",
        name: "DATA ARCHITECT",
        className: "group7"
      },
      {
        id: "G1",
        name: "DATA CLOUD CONSULTANT",
        className: "group6"
      },
      {
        id: "G2",
        name: "EXPERIENCE CLOUD . CONSULTANT",
        className: "group6"
      },
      {
        id: "G3",
        name: "B2B SOLUTION ARCHITECT",
        className: "group7"
      },
      {
        id: "G4",
        name: "APPLICATION ARCHITECT",
        className: "group7"
      },
      {
        id: "G5",
        name: "DEVELOPMENT LIFECYCLE & . DEPLOYMENT ARCHITECT",
        className: "group7"
      },
      {
        className: "none"
      },
      {
        className: "none"
      },
      {
        className: "none"
      },
      {
        className: "none"
      },
      {
        className: "none"
      },
      {
        className: "none"
      },
      {
        id: "H4",
        name: "CERTIFIED TECHNICAL . ARCHITECT",
        className: "group7"
      },
      {
        id: "H5",
        name: "SYSTEM ARCHITECT",
        className: "group7"
      },
      {
        className: "none"
      },
      {
        className: "none"
      },
      {
        className: "none"
      }
    ]
  };
  
  const svg = d3.select("#flowchart");
  
  const node = svg
    .selectAll(".node")
    .data(data.nodes)
    .enter()
    .append("g")
    .attr("class", (d) => (d.id ? "node" : "disable"));
  
  node
    .append("rect")
    .attr("width", 200)
    .attr("height", 60)
    .attr("class", (d) =>
      d.mostPopular ? `${d.className} most-popular` : d.className
    );
  
  node.each(function (d) {
    const textGroup = d3.select(this).append("g");
    if (d.name && d.name.includes(".")) {
      const nameParts = d.name.split(".");
      for (let i = 0; i < nameParts.length; i++) {
        textGroup
          .append("text")
          .text(nameParts[i])
          .attr("x", 100)
          .attr("y", 20 + i * 20) // new line
          .attr("fill", "#fff")
          .attr("alignment-baseline", "middle")
          .attr("class", "text-color");
      }
    } else {
      textGroup
        .append("text")
        .text(d.name)
        .attr("x", 100)
        .attr("y", 30)
        .attr("fill", "#fff")
        .attr("alignment-baseline", "middle")
        .attr("class", "text-color");
    }
  });
  
  // Set positions of nodes
  node.attr("transform", (d, i) => {
    let height = Math.floor(i / 8) + 1;
    d.x = 240 * (i - --height * 8);
    d.y = ++height * 70;
    console.log(d.id, d.x, d.y);
    return `translate(${240 * (i - --height * 8)},${++height * 100})`;
  });
  
  node.on("click", (event, d) => {
    if (d.id) {
      console.log(d.id);
    }
  });
  
  // svg arrow
  svg
    .append("defs")
    .append("marker")
    .attr("id", "arrow")
    .attr("viewBox", "0 0 10 10")
    .attr("refX", 10)
    .attr("refY", 5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 L 10 5 L 0 10 z");
  
  // draw line arrow
  const drawArrow = (path, isStroke, color, arrow = true) => {
    const link = svg.append("path").attr("class", "link").attr("d", path);
    if (isStroke) {
      link.attr("stroke-width", "3").attr("stroke-dasharray", "3,3");
    }
    if (arrow) {
      link.attr("marker-end", "url(#arrow)");
    }
    link.attr("stroke", color);
  };
  
  const linkArrow = [
    // Start A3
    { path: "M440 130 H480", isStroke: true, color: "#009c6b", arrow: false },
    { path: "M680 130 H720", isStroke: true, color: "#009c6b", arrow: false },
    // Start G2
    {
      path: "M340 760 L340 780 L820 780 L820 760",
      isStroke: true,
      color: "#0075bd"
    },
    // Start from top A4
    {
      path: "M820 100 L820 80 H470 L470 730 L440 730",
      isStroke: false,
      color: "#0075bd"
    },
    {
      path: "M820 100 L820 80 H470 L470 630 L440 630",
      isStroke: false,
      color: "#0075bd"
    },
    {
      path: "M820 100 L820 80 H470 L470 530 L440 530",
      isStroke: false,
      color: "#0075bd"
    },
    {
      path: "M820 100 L820 80 H470 L470 430 L440 430",
      isStroke: false,
      color: "#0075bd"
    },
    // Start from bottom A4
    {
      path: "M820 160 L820 175 H700 L700 330 L720 330",
      isStroke: false,
      color: "#8a54ed"
    },
    // Start bottom A6
    {
      path: "M1300 160 L1300 175 H950 L950 540 L920 540",
      isStroke: false,
      color: "#1b047b",
      arrow: false
    },
    {
      path: "M1300 160 L1300 175 H950 L950 640 L920 640",
      isStroke: false,
      color: "#1b047b",
      arrow: false
    },
    {
      path: "M1300 160 L1300 175 H950 L950 740 L920 740",
      isStroke: false,
      color: "#1b047b"
    },
    {
      path: "M1350 160 L1350 175 H1410 L1410 850 L1160 850",
      isStroke: false,
      color: "#ff00d1"
    },
    {
      path: "M1325 160 L1325 200",
      isStroke: false,
      color: "#ff00d1",
      arrow: false
    },
    // Start G4
    {
      path: "M720 730 H680",
      isStroke: false,
      color: "#1b047b"
    },
    // Start A5
    {
      path: "M1060 100 L1060 85 H1420 L1420 530 L1440 530",
      isStroke: false,
      color: "#1b047b"
    },
    {
      path: "M1060 160 L1060 175",
      isStroke: false,
      color: "#1b047b",
      arrow: false
    },
    // Start F2
    {
      path: "M240 630 L200 630 ",
      isStroke: false,
      color: "#0075bd"
    },
    // Start A7
    {
      path: "M1640 130 L1660 130 L1660 330 L1680 330",
      isStroke: false,
      color: "#00bbba"
    },
    // Start B7
    {
      path: "M1550 260 L1550 300",
      isStroke: false,
      color: "#00bbba"
    },
    // Start E5
    {
      path: "M1160 530 H1175 L1175 630 L1160 630",
      isStroke: false,
      color: "#1b047b",
      arrow: false
    },
    {
      path: "M1160 530 H1175 L1175 730 L1160 730",
      isStroke: false,
      color: "#1b047b",
      arrow: false
    },
    {
      path: "M1160 530 H1175 L1175 830 L1160 830",
      isStroke: false,
      color: "#1b047b"
    },
    // Start E8
    {
      path: "M1680 530 H1665 L1665 630 L1680 630",
      isStroke: false,
      color: "#1b047b",
      arrow: false
    },
    {
      path: "M1680 530 H1640",
      isStroke: false,
      color: "#1b047b"
    },
    // Start D6
    {
      path: "M1200 430 H1185 L1185 700 L1300 700 L1300 660",
      isStroke: false,
      color: "#1b047b"
    },
    // Start H5
    {
      path: "M960 830 H920",
      isStroke: false,
      color: "#1b047b"
    },
    // Start G4
    {
      path: "M860 760 L860 800",
      isStroke: false,
      color: "#1b047b"
    }
  ];
  
  linkArrow.map((item) => {
    item && drawArrow(item.path, item.isStroke, item.color, item.arrow);
  });
  