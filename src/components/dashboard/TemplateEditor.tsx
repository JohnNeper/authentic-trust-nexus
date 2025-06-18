
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Upload, 
  QrCode, 
  PenTool, 
  Save, 
  Download,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Move
} from 'lucide-react';

interface TemplateEditorProps {
  language: 'fr' | 'en';
}

const TemplateEditor: React.FC<TemplateEditorProps> = ({ language }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [templateName, setTemplateName] = useState('');
  const [qrPosition, setQrPosition] = useState({ x: 10, y: 10 });
  const [signaturePosition, setSignaturePosition] = useState({ x: 10, y: 85 });
  const [isDraggingQR, setIsDraggingQR] = useState(false);
  const [isDraggingSignature, setIsDraggingSignature] = useState(false);
  const [zoom, setZoom] = useState(100);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const content = {
    fr: {
      title: 'Éditeur de Template',
      description: 'Créez un nouveau template en important votre PDF et positionnant les éléments',
      uploadPDF: 'Importer PDF',
      templateName: 'Nom du template',
      namePlaceholder: 'Ex: Certificat de naissance',
      positions: 'Positionnement',
      qrCode: 'Code QR',
      signature: 'Signature',
      coordinates: 'Coordonnées',
      save: 'Sauvegarder',
      download: 'Télécharger',
      reset: 'Réinitialiser',
      preview: 'Aperçu',
      dragInstruction: 'Glissez les éléments pour les positionner',
      fileTypes: 'Formats acceptés: PDF',
      zoom: 'Zoom'
    },
    en: {
      title: 'Template Editor',
      description: 'Create a new template by importing your PDF and positioning elements',
      uploadPDF: 'Import PDF',
      templateName: 'Template name',
      namePlaceholder: 'Ex: Birth Certificate',
      positions: 'Positioning',
      qrCode: 'QR Code',
      signature: 'Signature',
      coordinates: 'Coordinates',
      save: 'Save',
      download: 'Download',
      reset: 'Reset',
      preview: 'Preview',
      dragInstruction: 'Drag elements to position them',
      fileTypes: 'Accepted formats: PDF',
      zoom: 'Zoom'
    }
  };

  const t = content[language];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
    }
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    
    // Place QR code if Alt key is pressed, otherwise signature
    if (event.altKey) {
      setQrPosition({ x: Math.max(0, Math.min(90, x)), y: Math.max(0, Math.min(90, y)) });
    } else {
      setSignaturePosition({ x: Math.max(0, Math.min(80, x)), y: Math.max(0, Math.min(90, y)) });
    }
  };

  const handleSaveTemplate = () => {
    if (!uploadedFile || !templateName) return;
    
    const templateData = {
      name: templateName,
      file: uploadedFile,
      qrPosition,
      signaturePosition,
      zoom,
      createdAt: new Date().toISOString()
    };
    
    console.log('Saving template:', templateData);
    // Here you would save to your backend/storage
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.title}</h2>
        <p className="text-gray-600 dark:text-gray-400">{t.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Controls Panel */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t.uploadPDF}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="templateName">{t.templateName}</Label>
                <Input
                  id="templateName"
                  placeholder={t.namePlaceholder}
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                />
              </div>
              
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Button 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full"
                  variant={uploadedFile ? "secondary" : "default"}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {uploadedFile ? uploadedFile.name : t.uploadPDF}
                </Button>
                <p className="text-xs text-gray-500 mt-1">{t.fileTypes}</p>
              </div>

              {uploadedFile && (
                <div className="space-y-3">
                  <div>
                    <Label>{t.zoom}: {zoom}%</Label>
                    <div className="flex gap-2 mt-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setZoom(Math.max(50, zoom - 25))}
                      >
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setZoom(Math.min(200, zoom + 25))}
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {uploadedFile && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.positions}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="flex items-center gap-2 mb-2">
                    <QrCode className="h-4 w-4 text-blue-600" />
                    {t.qrCode}
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label className="text-xs">X: {qrPosition.x.toFixed(1)}%</Label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={qrPosition.x.toFixed(1)}
                        onChange={(e) => setQrPosition(prev => ({ ...prev, x: parseFloat(e.target.value) }))}
                      />
                    </div>
                    <div>
                      <Label className="text-xs">Y: {qrPosition.y.toFixed(1)}%</Label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={qrPosition.y.toFixed(1)}
                        onChange={(e) => setQrPosition(prev => ({ ...prev, y: parseFloat(e.target.value) }))}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="flex items-center gap-2 mb-2">
                    <PenTool className="h-4 w-4 text-green-600" />
                    {t.signature}
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label className="text-xs">X: {signaturePosition.x.toFixed(1)}%</Label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={signaturePosition.x.toFixed(1)}
                        onChange={(e) => setSignaturePosition(prev => ({ ...prev, x: parseFloat(e.target.value) }))}
                      />
                    </div>
                    <div>
                      <Label className="text-xs">Y: {signaturePosition.y.toFixed(1)}%</Label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={signaturePosition.y.toFixed(1)}
                        onChange={(e) => setSignaturePosition(prev => ({ ...prev, y: parseFloat(e.target.value) }))}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={handleSaveTemplate}
                    disabled={!uploadedFile || !templateName}
                    className="flex-1"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {t.save}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setQrPosition({ x: 10, y: 10 });
                      setSignaturePosition({ x: 10, y: 85 });
                      setZoom(100);
                    }}
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* PDF Canvas */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>{t.preview}</CardTitle>
              <CardDescription>
                {t.dragInstruction}
                {uploadedFile && (
                  <Badge variant="secondary" className="ml-2">
                    <Move className="h-3 w-3 mr-1" />
                    Alt + Click = QR | Click = Signature
                  </Badge>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                ref={canvasRef}
                className="relative w-full h-[600px] bg-white border-2 border-dashed border-gray-300 rounded-lg overflow-hidden cursor-crosshair"
                style={{ 
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: 'top left',
                  backgroundImage: uploadedFile ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f8f9fa\'/%3E%3Ctext x=\'50\' y=\'50\' text-anchor=\'middle\' dy=\'.3em\' font-family=\'Arial\' font-size=\'12\' fill=\'%23666\'%3EPDF%3C/text%3E%3C/svg%3E")' : 'none',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat'
                }}
                onClick={handleCanvasClick}
              >
                {!uploadedFile ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">{t.uploadPDF}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* QR Code Position */}
                    <div
                      className="absolute w-12 h-12 bg-blue-100 border-2 border-blue-500 rounded flex items-center justify-center cursor-move hover:bg-blue-200 transition-colors"
                      style={{ 
                        left: `${qrPosition.x}%`, 
                        top: `${qrPosition.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      title="Code QR - Glissez pour repositionner"
                    >
                      <QrCode className="h-6 w-6 text-blue-600" />
                    </div>
                    
                    {/* Signature Position */}
                    <div
                      className="absolute w-20 h-12 bg-green-100 border-2 border-green-500 rounded flex items-center justify-center cursor-move hover:bg-green-200 transition-colors"
                      style={{ 
                        left: `${signaturePosition.x}%`, 
                        top: `${signaturePosition.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      title="Zone Signature - Glissez pour repositionner"
                    >
                      <PenTool className="h-4 w-4 text-green-600" />
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TemplateEditor;
