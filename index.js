google.charts.load("current", { packages: ["orgchart"] });
google.charts.setOnLoadCallback(drawChart);

function nodeContent(name, title, image, id, parent) {
  const imageElement = `<div class="node_image_container"> <img src="${image}" alt="${name}"/> </div>`;

  const infoElement = `<div class="node_Info"><p class="node_name">${name}</p><p class="node_title">${title}</p></div>`;

  const contentElement = `<div class="node_content">${imageElement + infoElement}</div>`;

  return [{ v: id, f: contentElement }, parent, title];
}
const t = console.log(
  nodeContent(
    "Khaled Labeb Ahmed",
    "Frontend web develeoper",
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    "Khaled Labeb",
    "",
  ),
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
    nodeContent(
      "Khaled Labeb Ahmed",
      "Frontend web develeoper",
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      "Khaled Labeb1",
      "",
    ),
    nodeContent(
      "Khaled Labeb Ahmed",
      "Frontend web develeoper",
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      "Khaled Labeb2",
      "Khaled Labeb1",
    ),
    nodeContent(
      "Khaled Labeb Ahmed",
      "Frontend web develeoper",
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      "Khaled Labeb3",
      "Khaled Labeb1",
    ),
    nodeContent(
      "Khaled Labeb Ahmed",
      "Frontend web develeoper",
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      "Khaled Labeb4",
      "Khaled Labeb3",
    ),
    nodeContent(
      "Khaled Labeb Ahmed",
      "Frontend web develeoper",
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      "Khaled Labeb5",
      "Khaled Labeb3",
    ),
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
