
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Upload, 
  QrCode, 
  PenTool, 
  Save, 
  Download,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Move,
  Trash2,
  Eye
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
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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
      previewMode: 'Mode Aperçu',
      editMode: 'Mode Édition',
      dragInstruction: 'Glissez les éléments pour les positionner',
      fileTypes: 'Formats acceptés: PDF',
      zoom: 'Zoom',
      clear: 'Effacer',
      templateSaved: 'Template sauvegardé avec succès!',
      templateReset: 'Template réinitialisé',
      fillAllFields: 'Veuillez remplir tous les champs et importer un PDF'
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
      previewMode: 'Preview Mode',
      editMode: 'Edit Mode',
      dragInstruction: 'Drag elements to position them',
      fileTypes: 'Accepted formats: PDF',
      zoom: 'Zoom',
      clear: 'Clear',
      templateSaved: 'Template saved successfully!',
      templateReset: 'Template reset',
      fillAllFields: 'Please fill all fields and import a PDF'
    }
  };

  const t = content[language];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
      toast({
        title: language === 'fr' ? 'PDF importé' : 'PDF imported',
        description: file.name,
      });
    } else {
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr' ? 'Veuillez sélectionner un fichier PDF valide' : 'Please select a valid PDF file',
        variant: 'destructive'
      });
    }
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current || isPreviewMode) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    
    // Place QR code if Alt key is pressed, otherwise signature
    if (event.altKey) {
      setQrPosition({ x: Math.max(0, Math.min(90, x)), y: Math.max(0, Math.min(90, y)) });
      toast({
        title: language === 'fr' ? 'Code QR repositionné' : 'QR Code repositioned',
        description: `X: ${x.toFixed(1)}%, Y: ${y.toFixed(1)}%`,
      });
    } else {
      setSignaturePosition({ x: Math.max(0, Math.min(80, x)), y: Math.max(0, Math.min(90, y)) });
      toast({
        title: language === 'fr' ? 'Signature repositionnée' : 'Signature repositioned',
        description: `X: ${x.toFixed(1)}%, Y: ${y.toFixed(1)}%`,
      });
    }
  };

  const handleSaveTemplate = () => {
    if (!uploadedFile || !templateName.trim()) {
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: t.fillAllFields,
        variant: 'destructive'
      });
      return;
    }
    
    const templateData = {
      name: templateName,
      file: uploadedFile,
      qrPosition,
      signaturePosition,
      zoom,
      createdAt: new Date().toISOString()
    };
    
    console.log('Saving template:', templateData);
    toast({
      title: language === 'fr' ? 'Succès' : 'Success',
      description: t.templateSaved,
    });
  };

  const handleReset = () => {
    setQrPosition({ x: 10, y: 10 });
    setSignaturePosition({ x: 10, y: 85 });
    setZoom(100);
    toast({
      title: language === 'fr' ? 'Réinitialisé' : 'Reset',
      description: t.templateReset,
    });
  };

  const handleClear = () => {
    setUploadedFile(null);
    setTemplateName('');
    setQrPosition({ x: 10, y: 10 });
    setSignaturePosition({ x: 10, y: 85 });
    setZoom(100);
    setIsPreviewMode(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast({
      title: language === 'fr' ? 'Effacé' : 'Cleared',
      description: language === 'fr' ? 'Tous les champs ont été effacés' : 'All fields have been cleared',
    });
  };

  const handleDownload = () => {
    if (!uploadedFile) {
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr' ? 'Aucun fichier à télécharger' : 'No file to download',
        variant: 'destructive'
      });
      return;
    }
    
    // Simulate download
    const url = URL.createObjectURL(uploadedFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = `template_${templateName || 'document'}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: language === 'fr' ? 'Téléchargement' : 'Download',
      description: language === 'fr' ? 'Template téléchargé' : 'Template downloaded',
    });
  };

  const handleZoomIn = () => {
    const newZoom = Math.min(200, zoom + 25);
    setZoom(newZoom);
  };

  const handleZoomOut = () => {
    const newZoom = Math.max(50, zoom - 25);
    setZoom(newZoom);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t.description}</p>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant={isPreviewMode ? "default" : "outline"}
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            disabled={!uploadedFile}
          >
            <Eye className="h-4 w-4 mr-2" />
            {isPreviewMode ? t.editMode : t.previewMode}
          </Button>
          <Button variant="outline" onClick={handleClear}>
            <Trash2 className="h-4 w-4 mr-2" />
            {t.clear}
          </Button>
        </div>
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
                  className="mt-1"
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
                  className="w-full mb-2"
                  variant={uploadedFile ? "secondary" : "default"}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {uploadedFile ? uploadedFile.name.substring(0, 20) + '...' : t.uploadPDF}
                </Button>
                <p className="text-xs text-gray-500">{t.fileTypes}</p>
              </div>

              {uploadedFile && (
                <div className="space-y-3">
                  <div>
                    <Label className="flex items-center justify-between">
                      <span>{t.zoom}: {zoom}%</span>
                    </Label>
                    <div className="flex gap-2 mt-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={handleZoomOut}
                        disabled={zoom <= 50}
                      >
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={handleZoomIn}
                        disabled={zoom >= 200}
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      onClick={handleSaveTemplate}
                      disabled={!uploadedFile || !templateName.trim()}
                      className="flex-1"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      {t.save}
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={handleDownload}
                      size="sm"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {uploadedFile && !isPreviewMode && (
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
                        step="0.1"
                        value={qrPosition.x.toFixed(1)}
                        onChange={(e) => setQrPosition(prev => ({ ...prev, x: parseFloat(e.target.value) || 0 }))}
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-xs">Y: {qrPosition.y.toFixed(1)}%</Label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={qrPosition.y.toFixed(1)}
                        onChange={(e) => setQrPosition(prev => ({ ...prev, y: parseFloat(e.target.value) || 0 }))}
                        className="text-sm"
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
                        step="0.1"
                        value={signaturePosition.x.toFixed(1)}
                        onChange={(e) => setSignaturePosition(prev => ({ ...prev, x: parseFloat(e.target.value) || 0 }))}
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-xs">Y: {signaturePosition.y.toFixed(1)}%</Label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={signaturePosition.y.toFixed(1)}
                        onChange={(e) => setSignaturePosition(prev => ({ ...prev, y: parseFloat(e.target.value) || 0 }))}
                        className="text-sm"
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  variant="outline"
                  onClick={handleReset}
                  className="w-full"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  {t.reset}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* PDF Canvas */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>{t.preview}</CardTitle>
              <CardDescription className="flex items-center justify-between">
                <span>{t.dragInstruction}</span>
                {uploadedFile && !isPreviewMode && (
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
                className={`relative w-full h-[600px] bg-white border-2 rounded-lg overflow-hidden transition-all duration-200 ${
                  !uploadedFile ? 'border-dashed border-gray-300' : 'border-solid border-gray-200 shadow-inner'
                } ${!isPreviewMode && uploadedFile ? 'cursor-crosshair' : 'cursor-default'}`}
                style={{ 
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: 'top left',
                  backgroundImage: uploadedFile ? 'linear-gradient(45deg, #f8f9fa 25%, transparent 25%), linear-gradient(-45deg, #f8f9fa 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f8f9fa 75%), linear-gradient(-45deg, transparent 75%, #f8f9fa 75%)' : 'none',
                  backgroundSize: uploadedFile ? '20px 20px' : 'none',
                  backgroundPosition: uploadedFile ? '0 0, 0 10px, 10px -10px, -10px 0px' : 'none'
                }}
                onClick={handleCanvasClick}
              >
                {!uploadedFile ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 font-medium">{t.uploadPDF}</p>
                      <p className="text-gray-400 text-sm mt-2">{t.fileTypes}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* PDF Content Simulation */}
                    <div className="absolute inset-4 bg-white rounded border border-gray-200 p-4">
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-bold text-gray-800">Document Template</h3>
                        <div className="w-full h-0.5 bg-gray-200 my-2"></div>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-100 rounded w-full"></div>
                        <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                        <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                        <div className="h-3 bg-gray-100 rounded w-1/2 mb-4"></div>
                      </div>
                    </div>
                    
                    {/* QR Code Position */}
                    <div
                      className={`absolute w-12 h-12 bg-blue-100 border-2 border-blue-500 rounded flex items-center justify-center transition-all duration-200 ${
                        !isPreviewMode ? 'cursor-move hover:bg-blue-200 hover:scale-110' : ''
                      }`}
                      style={{ 
                        left: `${qrPosition.x}%`, 
                        top: `${qrPosition.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      title={language === 'fr' ? 'Code QR - Glissez pour repositionner' : 'QR Code - Drag to reposition'}
                    >
                      <QrCode className="h-6 w-6 text-blue-600" />
                    </div>
                    
                    {/* Signature Position */}
                    <div
                      className={`absolute w-20 h-12 bg-green-100 border-2 border-green-500 rounded flex items-center justify-center transition-all duration-200 ${
                        !isPreviewMode ? 'cursor-move hover:bg-green-200 hover:scale-105' : ''
                      }`}
                      style={{ 
                        left: `${signaturePosition.x}%`, 
                        top: `${signaturePosition.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      title={language === 'fr' ? 'Zone Signature - Glissez pour repositionner' : 'Signature Zone - Drag to reposition'}
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
