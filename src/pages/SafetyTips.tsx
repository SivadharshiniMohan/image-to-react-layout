
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SafetyTips = () => {
  const safetyTips = [
    {
      icon: "⚠️",
      title: "Keep Safe Distance",
      description: "Always maintain a minimum safe distance of 30 feet from lit items. Never lean over or hold lit products."
    },
    {
      icon: "🛡️",
      title: "Adult Supervision Required",
      description: "Children must always be supervised by responsible adults. Never allow young children to handle or light any items."
    },
    {
      icon: "👥",
      title: "Follow Local Regulations",
      description: "Be aware of and comply with all local laws and regulations. Only use products in permitted areas and times."
    },
    {
      icon: "📖",
      title: "Read Instructions",
      description: "Carefully read and follow all instructions and warning labels before use. Never attempt to modify or combine products."
    },
    {
      icon: "👍",
      title: "Use Properly",
      description: "Light only one item at a time. Never attempt to relight or pick up malfunctioning products."
    },
    {
      icon: "❤️",
      title: "Emergency Preparedness",
      description: "Keep a bucket of water and first aid kit nearby. Know emergency procedures and have contact numbers ready."
    }
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Safety Tips</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your safety is our priority. Follow these essential guidelines for safe fireworks usage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {safetyTips.map((tip, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <CardTitle className="text-xl">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  {tip.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-800">Important Safety Reminders</h2>
          <ul className="space-y-3 text-red-700">
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>Never use fireworks indoors or in confined spaces</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>Keep pets indoors during fireworks displays</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>Dispose of used fireworks properly by soaking in water</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>Never attempt to make your own fireworks</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>Store fireworks in a cool, dry place away from heat sources</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SafetyTips;
