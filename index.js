google.charts.load("current", { packages: ["orgchart"] });
google.charts.setOnLoadCallback(drawChart);

/**
 * create node content
 *@param {Object} contentObj
 *@param {string} contentObj.name
 *@param {string} contentObj.title
 *@param {string} contentObj.image
 *@param {string} contentObj.id
 *@param {string} contentObj.parent
 */
function nodeContent(contentObj) {
  const { name, title, image, id, parent } = contentObj;

  const imageElement = `<div class="node_image_container"> <img src="${image}" alt="${name}"/> </div>`;

  const infoElement = `<div class="node_Info"><p class="node_name">${name}</p><p class="node_title">${title}</p></div>`;

  const contentElement = `<div class="node_content">${imageElement + infoElement}</div>`;

  return [{ v: id, f: contentElement }, parent, title];
}

const t = console.log(
  nodeContent({
    name: "",
    title: "",
    image: "",
    id: "",
    parent: "",
  }),
);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Name");
  data.addColumn("string", "Manager");
  data.addColumn("string", "ToolTip");

  // For each orgchart box, provide the name, manager, and tooltip to show.
  data.addRows([
    /*[
      {
        v: "Mike",
        f: "<div>hi</div>",
      },
      "",
      "The President",
     ],*/
    nodeContent({
      name: "Khaled Labeb Ahmed",
      title: "Frontend web develeoper",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      id: "Khaled Labeb1",
      parent: "",
    }),
    nodeContent({
      name: "Khaled Labeb Ahmed",
      title: "Frontend web develeoper",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      id: "Khaled Labeb2",
      parent: "Khaled Labeb1",
    }),
    nodeContent({
      name: "Khaled Labeb Ahmed",
      title: "Frontend web develeoper",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      id: "Khaled Labeb3",
      parent: "Khaled Labeb1",
    }),
    nodeContent({
      name: "Khaled Labeb Ahmed",
      title: "Frontend web develeoper",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      id: "Khaled Labeb4",
      parent: "Khaled Labeb3",
    }),
    nodeContent({
      name: "Khaled Labeb Ahmed",
      title: "Frontend web develeoper",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      id: "Khaled Labeb5",
      parent: "Khaled Labeb3",
    }),
  ]);

  // Create the chart.
  var chart = new google.visualization.OrgChart(
    document.getElementById("chart_div"),
  );
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, {
    allowHtml: true,
    nodeClass: "node_container",
    selectedNodeClass: "node_selected",
  });
}
