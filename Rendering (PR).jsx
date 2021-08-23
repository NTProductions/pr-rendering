// pr rendering
var sequence = app.project.activeSequence;

// in premiere
sequence.exportAsMediaDirect("~/Desktop", "C:/Users/Nate/Documents/Adobe/Adobe Media Encoder/15.0/Presets/ig.epr", 0);
sequence.exportAsProject("~/Desktop");

// ame
app.encoder.encodeFile(inputFilePath, outputFilePath, "C:/Users/Nate/Documents/Adobe/Adobe Media Encoder/15.0/Presets/ig.epr", 0, 1);
app.encoder.encodeProjectItem(app.project.rootItem.children[0], outputFilePath, "C:/Users/Nate/Documents/Adobe/Adobe Media Encoder/15.0/Presets/ig.epr", 0, 1);
app.encoder.encodeSequence(app.project.activeSequence, outputFilePath, "C:/Users/Nate/Documents/Adobe/Adobe Media Encoder/15.0/Presets/ig.epr", 0, 1);

app.encoder.launchEncoder();
app.encoder.startBatch();