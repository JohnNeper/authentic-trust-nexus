
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, EyeOff } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Here you would handle the login logic
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Header */}
        <div className="text-center">
          <NavLink to="/" className="inline-block">
            <img 
              src="/lovable-uploads/6703fdf1-262e-43bf-9da6-dfe1abea2d13.png" 
              alt="Authentic Logo" 
              className="h-16 w-auto mx-auto mb-4"
            />
          </NavLink>
          <h2 className="text-3xl font-bold text-gray-900">Espace Institution</h2>
          <p className="text-gray-600 mt-2">Accédez à votre tableau de bord sécurisé</p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Shield className="text-blue-900" size={24} />
              </div>
            </div>
            <CardTitle className="text-xl">Connexion Sécurisée</CardTitle>
            <CardDescription>
              Authentification multi-facteurs pour votre sécurité
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email institutionnel
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="nom@institution.gov"
                  required
                  className="border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    required
                    className="border-gray-300 focus:border-blue-900 focus:ring-blue-900 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                  />
                  <span className="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-blue-900 hover:text-blue-800 font-medium"
                >
                  Mot de passe oublié ?
                </button>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Lock className="mr-2" size={20} />
                Se connecter
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center space-y-4">
                <p className="text-sm text-gray-600">
                  Pas encore client ?
                </p>
                <NavLink
                  to="/"
                  className="inline-flex items-center text-blue-900 hover:text-blue-800 font-medium"
                >
                  Demander une démonstration →
                </NavLink>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center">
                  <Shield size={12} className="mr-1" />
                  SSL 256-bit
                </span>
                <span>•</span>
                <span>Conforme RGPD</span>
                <span>•</span>
                <span>Audit de sécurité</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Besoin d'aide ? Contactez notre support technique
          </p>
          <p className="text-sm text-blue-900 font-medium">
            support@authentic.cm • +237 6XX XXX XXX
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
